# `System`类

`System`是最重要的类。它有三种API：注册API，平台使用API和usersystem使用API。

*  构造函数
  `new System()`
* **注册API（只能在运行时之前使用）**
* `system.registerGenerator(generator)`
  * `generator`：一个`Generator`
  * 返回值：`undefined`
* `system.registerCanonicalGenerator(o)`
  * `o`: 一个参数对象.
  * 返回值：`undefined`
* `system.registerCommandParser(commandParser)`
  * `commandParser`：一个命令处理器
  * 返回值：`undefined`
* **平台使用API（只能在运行时使用）**
  **此API被用于NormaConstructor框架，如果你是生成器开发者，不建议使用此API。**
* `system.inject(platform)`
  * `platform`: a `Platform`.
  * 返回值：`undefined`
    建议平台应该在`use()`的
	第一行调用这个函数。
* `system.createUser(id)`
  * `id`: 一个number。
  * 返回值：一个`User`
* `system.getUser(id)`
  * `id`: 一个number。
  * 返回值：一个`User`.
* `system.hasUser(id)`
  * `id`: 一个number。
  * 返回值：一个boolean。
* **usersystem使用API只能在运行时被调用。**
  **通常它只被usersystem或内部实现使用。**
  **如果你是生成器开发者，不建议使用此API。**
* `system.getGenerators()`
  * 返回值：`Generator`数组
* `system.createRuntime(auth)`
  * `auth`: 一个可以验证的object。
  * 返回值：一个`Runtime`.
