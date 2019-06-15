import Data.*
import org.apache.ignite.Ignite
import org.apache.ignite.IgniteCache
import org.apache.ignite.IgniteDataStreamer
import org.apache.ignite.Ignition

object IgniteSingleton {
    var ignite: Ignite = Ignition.start()
    var users: IgniteCache<Int, User> = ignite.getOrCreateCache("Users")
    var userData: IgniteCache<Int, User> = ignite.getOrCreateCache("UserData")
    var goal: IgniteCache<Int, User> = ignite.getOrCreateCache("UserData")
    var activityEvents: IgniteDataStreamer<String, ActivityEvent> = ignite.dataStreamer("ActivityEvents")

}