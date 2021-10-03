# Class `System` #

`System` is one of most import class. It have two kinds of API: register API, platform used API.

* constructor
  `new System()`
* **Register API can only be called before runtime.**
* `system.registerGenerator(generator)`
  * `generator`: a `Generator`.
  * return value: `undefined`.
* `system.registerCanonicalGenerator(o)`
  * `o`: an argument object.
  * return value: `undefined`.
* `system.registerCommandParser(commandParser)`
  * `commandParser`: a command parser.  
  * return value: `undefined`.
* **platform used API can only be called at runtime.**
  **Normally it is only used by platform, or inner implementation .**
  **If you are a normal developer, please don't rely on these.**
* `system.inject(platform)`
  * `platform`: a `Platform`.
  * return value: `undefined`.
    It's recommended that platform should call
	this function at first line of `use()`.
* `system.createUser(id)`
  * `id`: a number.
  * return value: a `User`.
* `system.getUser(id)`
  * `id`: a number.
  * return value: a `User`.
* `system.hasUser(id)`
  * `id`: a number.
  * return value: a boolean.
* **usersystem used API can only be called at runtime.**
  **Normally it is only used by usersystem, or inner implementation .**
  **If you are a normal developer, please don't rely on these.**
* `system.getGenerators()`
  * return value: a array, `Generator[]`.
* `system.createRuntime(auth)`
  * `auth`: an object represent the authority.
  * return value: a `Runtime`.
