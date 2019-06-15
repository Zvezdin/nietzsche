package Data

import org.apache.ignite.Ignite

abstract class IgniteRecord<T>() {
    abstract val id: T

}