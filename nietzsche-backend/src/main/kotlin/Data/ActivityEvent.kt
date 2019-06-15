package Data

import java.util.Date

data class ActivityEvent(val userId: Int, val type: ActivityScoringMultiplier, val date: Date, val amount: Int)