package Data

enum class TimePeriod {
    Day,
    Week,
    Month
}

data class TimedCalories(var time: Int, var calories: Int)
data class QuestTracker(var quest: Int, var type: ActivityType?, var target: Int, var current: Int)
data class UserState(
        val username: String,
        var completedQuests: List<Int>,
        var quests: List<QuestTracker>,
        var level: Int, var calories: Int,
        var timeBasedCallories: Map<TimePeriod, TimedCalories>,
        var gold: Int, var inventory: List<Int>,
        var interests: Set<String>) : IgniteRecord<Int>() {
    override var id: Int = 0
}//achievements is an array of achieved goalId