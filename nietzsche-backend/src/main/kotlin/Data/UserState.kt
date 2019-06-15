package Data

data class UserState(override val id: Int, val activityScoresByLevel: Map<ActivityLevel, Int>, val quests: List<Int>) : IgniteRecord<Int>() //achievements is an array of achieved goalId