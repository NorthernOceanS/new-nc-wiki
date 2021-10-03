# `Platform`接口 #

`Platform`抽象了底层接口，隐藏了实现细节，将干净的API引入NC，而其他东西则依赖于框架。

`Platform`有两个API，`use()`API与运行时API。

Use API

* `platform.use(nc)`
  * `nc`: 一个`NC`应用程序
  * 返回值: `undefinded`
* `platform.createRuntime(id)`
  * `id`: 数字
  * 返回值: 一个`Runtime`
