import Data.*
import org.apache.ignite.IgniteCache
import org.apache.ignite.IgniteDataStreamer
import org.apache.ignite.Ignition
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

    }

    object Market {
        fun buy(marketItemId: Int, userId: Int) {

        }
    }


    var users: IgniteCache<Int, User> = ignite.getOrCreateCache("Users")
    var usersState: IgniteCache<Int, UserState> = ignite.getOrCreateCache("UserState")
    var quests: IgniteCache<Int, User> = ignite.getOrCreateCache("Quests")
    var market: IgniteCache<Int, MarketItem> = ignite.getOrCreateCache("Market")

    var activityEventsCache: IgniteCache<Int, ActivityEvent> = ignite.getOrCreateCache("ActivityEvents")
    var activityEvents: IgniteDataStreamer<Int, ActivityEvent> = ignite.dataStreamer(activityEventsCache.name)

    fun listen() {
        activityEvents.receiver(StreamVisitor.from { _, entry ->
            println("${entry.key}: ${entry.value}")
        })
    }

    fun fake() {
        val fake = ignite.getOrCreateCache<String, Boolean>("fake")
        val value = fake.get("fake")
        if(value != null) {

        }else {
            usersState.add(UserState("alex4o", listOf(), listOf(), 0, 100, mapOf(TimePeriod.Month to TimedCalories(5, 50)), 999))
            usersState.add(UserState("velko", listOf(), listOf(), 1, 200, mapOf(TimePeriod.Month to TimedCalories(5, 10)), 0))
            usersState.add(UserState("zvezdin", listOf(), listOf(), 0, 150, mapOf(TimePeriod.Month to TimedCalories(5, 15)), 0))
            usersState.add(UserState("boris", listOf(), listOf(), 0, 110, mapOf(TimePeriod.Month to TimedCalories(5, 55)), 0))
            usersState.add(UserState("gan4o", listOf(), listOf(), 0, 77, mapOf(TimePeriod.Month to TimedCalories(5, 15)), 0))


            market.add(MarketItem("Golqm Guz", "Very big ass", 50, true))
            market.add(MarketItem("Free Water", "Get some free water", 150, true))

            fake.put("fake", true)
        }
    }
}

