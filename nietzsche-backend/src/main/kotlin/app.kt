
import Data.User
import Web.module
import Web.routes
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import org.apache.ignite.Ignition
import org.apache.ignite.cache.query.ScanQuery
import java.nio.file.Paths
import org.apache.ignite.IgniteDataStreamer
import java.util.*


fun main() {
    Database.listen()
    println(Database.counter.query(ScanQuery<String, Int>()).map { "${it.key}: ${it.value}" })

    Database.fake()
    println(Database.counter.query(ScanQuery<String, Int>()).map { "${it.key}: ${it.value}" })
    embeddedServer(Netty, 8080) { module(); routes() }.start(true)
}