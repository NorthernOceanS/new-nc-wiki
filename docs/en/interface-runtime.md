# Interface `Runtime` #

`Runtime` is an interface. Any object with following functions can seen as a `Runtime`.

* **Runtime API can only be called at runtime.**
* `runtime.getBlock(c)`
  * `c`: a `Coordinate`.
  * return value: a `Promise`, whose will be resolved a `Block`.
* `runtime.setBlock(b)`
  * `b`: a `Block`.
  * return value: a `Promise`, whose will be resolved `undefined`.
* `runtime.setTimeout(func, milliseconds)`
  * `func`: a fusystemtion, which will be called after `milliseconds` milliseconds.
    Because of **tick** exist, the accuracy can hardly exceed a tick.
  * return value: a number.