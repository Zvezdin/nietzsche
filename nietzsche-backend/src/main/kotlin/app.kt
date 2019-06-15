import Data.User
import org.apache.ignite.Ignition
import org.apache.ignite.cache.query.ScanQuery
import org.h2.util.StringUtils.cache
import org.apache.ignite.internal.processors.query.h2.sql.GridSqlQueryParser.query
import org.apache.ignite.cache.query.QueryCursor
import org.apache.ignite.cache.query.SqlFieldsQuery
import org.apache.ignite.configuration.IgniteConfiguration
import java.nio.file.Paths

fun igniteConfigration(block: IgniteConfiguration.() -> Unit) : IgniteConfiguration {
    var cfg = IgniteConfiguration()
    block(cfg)
    return cfg
}

fun main() {
    var ignite = Ignition.start(igniteConfigration {
        igniteHome = Paths.get("ignite").toAbsolutePath().toString()
    })

    var users = ignite.getOrCreateCache<Int, User>("Users")

    var user = User(0, "alex4o", "bonin@abv.bg")
    users.put(user.id, user)


    println(users.get(0))

    println("Hello world")
}