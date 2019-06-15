package Data

data class UserState(val id: Int, val activityScoresByLevel: Map<ActivityLevel, Int>, val quests: List<Int>) //achievements is an array of achieved goalId