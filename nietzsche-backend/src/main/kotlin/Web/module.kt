package Web

import io.ktor.application.Application
import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.Authentication
import io.ktor.auth.UserPasswordCredential
import io.ktor.auth.authenticate
import io.ktor.auth.jwt.jwt
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.gson.gson
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.*
import me.avo.io.ktor.auth.jwt.sample.JwtConfig

fun Application.module() {
    install(CallLogging)
    install(ContentNegotiation) { gson { } }

//    val userSource: UserSource = UserSourceImpl()
    install(Authentication) {
        /**
         * Setup the JWT authentication to be used in [Routing].
         * If the token is valid, the corresponding [User] is fetched from the database.
         * The [User] can then be accessed in each [ApplicationCall].
         */
//        jwt {
//            verifier(JwtConfig.verifier)
//            realm = "ktor.io"
//            validate {
////                it.payload.getClaim("id").asInt()?.let(userSource::findUserById)
//            }
//        }
    }


}
