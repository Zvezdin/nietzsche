package Data

enum class TimePeriod {
    Day,
    Week,
    Month
}

data class TimedCalories(var time: Int, var calories: Int)
data class UserState(var username: String, val completedQuests: List<Int>, val quests: List<Int>, var level: Int, var calories: Int, var timeBasedCallories: Map<TimePeriod, TimedCalories>, var gold: Int) : IgniteRecord<Int>() {
    override var id: Int = 0
}//achievements is an array of achieved goalId