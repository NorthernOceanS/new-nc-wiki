# Interface `Platform` #

`Platform` is an abstraction of Minecraft(&copy;) API, it hide the implementation details, bringing clean APIs to `NC` and other things rely on platform.

`Platform` have two kinds of API, `use()` and runtime API.

The `use` API is written as following:

* `platform.use(nc)`
  * `nc`: a `NC` application.
  * return value: `undefinded`.
* `platform.createRuntime(id)`
  * `id`: a number.
  * return value: a `Runtime`.
