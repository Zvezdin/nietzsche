package Data

import java.util.*

data class Goal(override val id: Int, val level: ActivityLevel, val type: ActivityType?, val target: Int, val reward: String) : IgniteRecord<Int>()