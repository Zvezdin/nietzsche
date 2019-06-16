package Data

data class MarketItem(val name: String, val description: String, val price: Int, val available: Boolean) : IgniteRecord<Int>() {
    override var id: Int = 0

}