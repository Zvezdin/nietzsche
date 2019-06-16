package Data

import java.util.*

data class Quest(val level: Int, val type: ActivityType?, val target: Int, val reward: Int) : IgniteRecord<Int>() {
    override var id: Int = 0

}