import Data.*
import org.apache.ignite.IgniteCache
import org.apache.ignite.IgniteDataStreamer
import org.apache.ignite.Ignition
import org.apache.ignite.cache.query.ScanQuery
import org.apache.ignite.configuration.DataStorageConfiguration
import org.apache.ignite.stream.StreamVisitor
import java.nio.file.Paths
import java.util.*


object Database {

    val ignite = Ignition.start(igniteConfiguration {
        igniteHome = Paths.get("ignite").toAbsolutePath().toString()
        dataStorageConfiguration = DataStorageConfiguration()
        dataStorageConfiguration.defaultDataRegionConfiguration.setPersistenceEnabled(true)
    })

    init {
        ignite.cluster().active(true)
    }

    var counter: IgniteCache<String, Int> = ignite.getOrCreateCache("Countes")

    fun <T> IgniteCache<Int, T>.getNext() : Int {
        var count = counter.get(this.name)
        if(count == null) { count = 0 }
        counter.put(this.name, count + 1)
        return count
    }

    fun <T : IgniteRecord<Int>> IgniteCache<Int, T>.add(item: T) {
        val nextId = this.getNext()
        item.id = nextId
        this.put(nextId, item)
    }

    object Users {
        fun top(count: Int, period: TimePeriod) : List<UserState> {
            val calendar = Calendar.getInstance()
            // usersState.putAsync(0, )
            return usersState.sortedByDescending {
                it.value.timeBasedCallories[period]?.let {
                    if(period == TimePeriod.Day && calendar.get(Calendar.DAY_OF_YEAR) == it.time) {
                        it.calories
                    } else if(period == TimePeriod.Week && calendar.get(Calendar.WEEK_OF_YEAR) == it.time) {
                        it.calories
                    } else if (period == TimePeriod.Month && calendar.get(Calendar.MONTH) == it.time) {
                        it.calories
                    } else {
                        0
                    }
                } ?: 0
            }.take(count).map { it.value }

        }

        fun top(amount: Int): List<UserState> {
            return usersState.sortedByDescending { it.value.calories }.take(amount).map { it.value }
        }



    }

    object Quests {
        fun recommend(userId: Int, count: Int): List<Quest>? {
            return usersState.get(userId)?.let {
                quests.query(ScanQuery<Int, Quest> { _, quest -> quest.tags.intersect(it.interests).isNotEmpty() && quest.level <= it.level }).take(count)
            }?.let { it.map { it.value } }
        }

        fun accept(userId: Int, questId: Int): Map<String, String> {
            var user = usersState.get(userId)
            val quest = quests.get(questId)

            user.quests += QuestTracker(quest.id, quest.type, quest.target, 0)
            usersState.put(user.id, user)

            return if(user.level >= quest.level) {
                mapOf("message" to "success")
            }else{
                mapOf("error" to "can't accept quest")
            }
        }
    }

    object Market {
        fun buy(marketItemId: Int, userId: Int): Map<String, String> {
            val user = usersState.get(userId)
            val marketItem = market.get(marketItemId)
            return if(user.gold > marketItem.price) {
                user.gold -= marketItem.price
                user.inventory += marketItemId
                usersState.put(userId, user)
                mapOf("message" to "success")
            }else{
                mapOf("error" to "not enough money")
            }
        }
    }


    var users: IgniteCache<Int, User> = ignite.getOrCreateCache("Users")
    var usersState: IgniteCache<Int, UserState> = ignite.getOrCreateCache("UserState")
    var quests: IgniteCache<Int, Quest> = ignite.getOrCreateCache("Quests")
    var market: IgniteCache<Int, MarketItem> = ignite.getOrCreateCache("Market")

    var activityEventsCache: IgniteCache<Int, ActivityEvent> = ignite.getOrCreateCache("ActivityEvents")
    var activityEvents: IgniteDataStreamer<Int, ActivityEvent> = ignite.dataStreamer(activityEventsCache.name)

    fun listen() {
        activityEvents.receiver(StreamVisitor.from { _, entry ->
            println("${entry.key}: ${entry.value}")
            val event = entry.value
            val user = usersState.get(entry.value.userId)
            var completed: MutableSet<Int> = mutableSetOf()

            for(questCounter in user.quests){
                questCounter.type?.let {
                    if(it == event.type) {
                        questCounter.current += event.calories
                    }
                }

                if(questCounter.type == null) {
                    questCounter.current += event.calories
                }

                if(questCounter.current >= questCounter.target) {
                    completed.add(questCounter.quest)

                }
            }

            val reward = completed.map { quests.get(it).reward }.reduce { acc, cur -> acc + cur }

            user.quests = user.quests.filter { !completed.contains(it.quest) }
            user.completedQuests += completed
            user.gold += reward
            user.level += 1

            user.calories += event.calories
            println("User updated: $user")
            usersState.put(user.id, user)
        })
    }

    fun fake() {
        val fake = ignite.getOrCreateCache<String, Boolean>("fake")
        val value = fake.get("fake")
        if(value != null) {

        }else {
            usersState.add(UserState("alex4o", listOf(), listOf(), 4, 100, mapOf(TimePeriod.Month to TimedCalories(5, 50)), 999, listOf(), setOf("speed", "outdoors", "beach")))
            usersState.add(UserState("velko", listOf(), listOf(), 1, 200, mapOf(TimePeriod.Month to TimedCalories(5, 10)), 0, listOf(), setOf("sea", "pool")))
            usersState.add(UserState("zvezdin", listOf(), listOf(), 0, 150, mapOf(TimePeriod.Month to TimedCalories(5, 15)), 0, listOf(), setOf("safe", "parks")))
            usersState.add(UserState("boris", listOf(), listOf(), 0, 110, mapOf(TimePeriod.Month to TimedCalories(5, 55)), 0, listOf(), setOf()))
            usersState.add(UserState("gan4o", listOf(), listOf(), 0, 77, mapOf(TimePeriod.Month to TimedCalories(5, 15)), 0, listOf(), setOf()))


            market.add(MarketItem("Golqm Guz", "Very big ass", 50, true))
            market.add(MarketItem("Free Water", "Get some free water", 150, true))

            quests.add(Quest(0, ActivityType.STEPS, 10, 25, setOf("walking", "parks"), "For the people who like to walk in the park") )
            quests.add(Quest(1, ActivityType.STEPS, 10, 25, setOf("outdoors", "parks"), "Walk around some random forest") )
            quests.add(Quest(5, ActivityType.RUNNING, 100, 200, setOf("running", "distance", "speed"), "For these who live beyond the limits") )
            quests.add(Quest(2, ActivityType.SWIMMING, 10, 55, setOf("sea", "beach", "outdoors"), "Try to swim for 10 meters in the sea.") )
            quests.add(Quest(1, ActivityType.SWIMMING, 5, 55, setOf("pool", "safe"), "A small swim in the community pool.") )



            fake.put("fake", true)
        }
    }
}

