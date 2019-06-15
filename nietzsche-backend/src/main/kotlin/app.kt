import Data.User
import org.apache.ignite.Ignition
import org.apache.ignite.cache.query.ScanQuery
import java.nio.file.Paths



fun main() {
    var ignite = Ignition.start(igniteConfiguration {
        igniteHome = Paths.get("ignite").toAbsolutePath().toString()
    })

    var users = ignite.getOrCreateCache<Int, User>("Users")

    var user = User(0, "alex4o", "bonin@abv.bg")
    users.put(user.id, user)

    users.query(ScanQuery<Int, User>()).forEach {
        println("${it.key}: ${it.value}")
    }

    println(users.get(0))

    println("Hello world")
}