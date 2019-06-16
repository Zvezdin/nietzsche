package Data

import org.apache.ignite.Ignite

abstract class IgniteRecord<T>() {
    abstract var id: T

}