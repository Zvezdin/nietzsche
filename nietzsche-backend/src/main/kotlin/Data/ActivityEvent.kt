package Data

import java.util.Date

data class ActivityEvent(val userId: Int, val type: ActivityType, val date: Date, val calories: Int)