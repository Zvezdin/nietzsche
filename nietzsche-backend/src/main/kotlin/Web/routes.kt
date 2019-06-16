package Web

import Data.ActivityEvent
import Data.ActivityType
import Data.MarketItem
import Data.TimePeriod
import io.ktor.application.Application
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.UserPasswordCredential
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
            Database.activityEvents.addData(0, ActivityEvent(0, ActivityType.SWIMMING, Date(), 2))
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
                println("getMarket")
                call.respond( Database.market.query(ScanQuery<Int, MarketItem>()).map { it.value } )
            }

            get("/{id}") {
                call.respond( Database.market.get(call.parameters["id"]!!.toInt()) )

            }

            get("/{id}/buy") {
                call.respond( Database.Market.buy( call.parameters["id"]!!.toInt(), 0 ) )
            }
        }

        get("/quest/{id}") {
            call.respond( Database.quests.get(call.parameters["id"]!!.toInt()) )

        }



        route("users") {
            get("/{id}") {
                val userId = call.parameters["id"]!!.toInt()
                call.respond( Database.users.get(call.parameters["id"]!!.toInt()) )

            }

            get("/{id}/quests") {
                val userId = call.parameters["id"]!!.toInt()
                val count = call.request.queryParameters["count"]?.let{ it.toInt() } ?: 5

                call.respond( Database.Quests.recommend(userId, count) ?: { mapOf("error" to "User not found") })
            }

            get("/{id}/accept/{quest}") {
                val userId = call.parameters["id"]!!.toInt()
                val questId = call.parameters["quest"]!!.toInt()
                call.respond( Database.Quests.accept(userId, questId) )

            }

            get("/top/{time?}") {
                val count = call.request.queryParameters["count"]?.let{ it.toInt() } ?: 5

                if(call.parameters.contains("time")){
                    val time = call.parameters["time"]
                    call.respond(Database.Users.top(count, TimePeriod.valueOf(time!!)))

                }else{
                    call.respond(Database.Users.top(count))

                }
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