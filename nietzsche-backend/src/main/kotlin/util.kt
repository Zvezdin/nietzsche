import org.apache.ignite.configuration.IgniteConfiguration

fun igniteConfiguration(block: IgniteConfiguration.() -> Unit) : IgniteConfiguration {
    var cfg = IgniteConfiguration()
    cfg.block()
    return cfg
}