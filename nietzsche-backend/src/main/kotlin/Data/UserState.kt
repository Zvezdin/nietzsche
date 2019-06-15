package Data

data class UserState(val userId: String, val activityScoresByLevel: Map<ActivityLevel, Int>, val achievements: Array<String>) //achievements is an array of achieved goalId