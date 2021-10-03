# 运行时（Runtime） API #

具有以下功能的任何对象都可以视为`Runtime`。

* **运行时API只能在运行时使用。**
* `runtime.getBlock(c)`
  * `c`: 一个`Coordinate`.
  * 返回值：一个`Promise`, 该`Promise`将会fulfilled为`Block`。
* `runtime.setBlock(b)`
  * `b`: 一个`Block`
  * 返回值：一个`Promise`，用于处理运行结果，该`Promise`将会fulfilled为`undefined`。
* `runtime.setTimeout(func, milliseconds)`
  * `func`: 一个`Function`，在`milliseconds`毫秒后调用。（精确到游戏刻）
  * 返回值：数字
