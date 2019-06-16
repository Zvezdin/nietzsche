package Web

import Data.ActivityEvent
import Data.ActivityType
import Data.MarketItem
import Data.TimePeriod
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.UserPasswordCredential
import io.ktor.auth.authenticate
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.*
import org.apache.ignite.cache.query.ScanQuery
import java.util.*

fun Application.routes() {

    install(Routing) {

        /**
         * A public login [Route] used to obtain JWTs
         */
        post("login") {
            val credentials = call.receive<UserPasswordCredential>()
//            val user = userSource.findUserByCredentials(credentials)
//            val token = JwtConfig.makeToken(user)
//            call.respondText(token)
        }

        get("/") {
            call.respond(mapOf("OK" to true))
            Database.activityEvents.addData(0, ActivityEvent(0, ActivityType.STEPS, Date(), 12))
            Database.activityEvents.flush()
        }

        get("/top/{count}/{time?}") {

            if(call.parameters.contains("time")){
                val time = call.parameters["time"]
                call.respond(Database.Users.top(call.parameters["count"]!!.toInt(), TimePeriod.valueOf(time!!)))

            }else{
                call.respond(Database.Users.top(call.parameters["count"]!!.toInt()))

            }
        }

        route("market") {
            get {
                call.respond( Database.market.query(ScanQuery<Int, MarketItem>()).map { it.value } )
            }

            get("/{id}") {
                call.respond( Database.market.get(call.parameters["id"]!!.toInt()) )

            }

            get("/{id}/buy") {
                  Database.Market.buy( call.parameters["id"]!!.toInt(), 0 )
            }
        }

//        /**
//         * All [Route]s in the authentication block are secured.
//         */
//        authenticate {
//            route("secret") {
//
//                get {
//                    //                    val user = call.user!!
////                    call.respond(user.countries)
//                }
//
//                put {
//                    TODO("All your secret routes can follow here")
//                }
//
//            }
//        }
//
//        /**
//         * Routes with optional authentication
//         */
//        authenticate(optional = true) {
//            get("optional") {
//                //                val user = call.user
////                val response = if (user != null) "authenticated!" else "optional"
////                call.respond(response)
//            }
//        }
    }
}