package Data

import io.ktor.auth.Principal

data class User(override var id: Int, var username: String, var email: String) : IgniteRecord<Int>(), Principal {

}