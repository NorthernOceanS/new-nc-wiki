# Class `User` #

`User` is a class. It can be accessed in two ways. `system.createUser()` normally is only used by platform. As a generator developer, you can access it as `e.target`.


* constructor
  `new User(system, id)`
  * `system`: an instance of `System`.
  * `id`: a number.
* `user.session`: an object.
* `user.nextGenerator()`
  * return value: `undefined`
* `user.perviousGenerator()`
  * return value: `undefined`
* `user.addPoistion(p)`
  * `p`: a `Poistion`.
  * return value: `undefined`
* `user.addBlockType(e)`
  * `t`: a `BlockType`.
  * return value: `undefined`
* `user.addDirection(e)`
  * `d`: a `Direction`.
  * return value: `undefined`
* `user.removePoistion(index)`
  * `index`: a number.
  * return value: `undefined`
* `user.removeBlockType(index)`
  * `index`: a number.
  * return value: `undefined`
* `user.removeDirection(index)`
  * `index`: a number.
  * return value: `undefined`
<--* `user.isValidParameter()`
  * return value: a boolean.-->
* `user.generate()`
  * return value: `undefined`
* `user.exit()`
  * return value: `undefined`
