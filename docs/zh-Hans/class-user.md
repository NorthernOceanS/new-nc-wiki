# `User`类 #

`User`类在`system.createUser()`时出现；在生成器中，`e.target`也指向一个`User`。


* 构造函数
 `new User(system, id)`
  * `system`：一个`System`
  * `id`: 数字
* `user.session`: 一个对象
* `user.nextGenerator()`
  * 返回值：`undefined`
* `user.perviousGenerator()`
  * 返回值：`undefined`
* `user.addPoistion(p)`
  * `p`: 一个`Poistion`
  * 返回值：`undefined`
* `user.addBlockType(e)`
  * `t`: 一个`BlockType`
  * 返回值：`undefined`
* `user.addDirection(e)`
  * `d`: 一个`Direction`
  * 返回值：`undefined`
* `user.removePoistion(index)`
  * `index`: 数字
  * 返回值：`undefined`
* `user.removeBlockType(index)`
  * `index`: 数字
  * 返回值：`undefined`
* `user.removeDirection(index)`
  * `index`: 数字
  * 返回值：`undefined`
* ~`user.isValidParameter()`~
  * 返回值：布尔
* `user.generate()`
  * 返回值：`undefined`
* `user.exit()`
  * 返回值：`undefined`
