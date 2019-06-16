package Data

import io.ktor.auth.Principal

data class User(var email: String, var password: String) : IgniteRecord<Int>(), Principal {
    override var id: Int = 0
}