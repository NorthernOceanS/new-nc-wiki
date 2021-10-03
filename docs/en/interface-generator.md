# Interface `Generator` #

`Generator` is an interface. Any object with following functions can seen as a  `Generator`, and can be registered to system.


* `generator.name`: a string or a symbol.
* `generator.onAddPoistion(e)`
  * `e`: an `AddPoistionEvent`.
  * return value: `undefined`
* `generator.onAddBlockType(e)`
  * `e`: an `AddBlockTypeEvent`.
  * return value: `undefined`
* `generator.onAddDirection(e)`
  * `e`: an `AddDirectionEvent`.
  * return value: `undefined`
* `generator.onRemovePoistion(e)`
  * `e`: an `RemovePoistionEvent`.
  * return value: `undefined`
* `generator.onRemoveBlockType(e)`
  * `e`: an `RemoveBlockEvent`.
  * return value: `undefined`
* `generator.onRemoveDirection(e)`
  * `e`: an `RemoveDirectionEvent`.
  * return value: `undefined`
<--* `generator.isValidParameter(e)`
  * `e`: an `ValidateParameterEvent`.
  * return value: a boolean.-->
* `generator.generate(e)`
  * `e`: an `Event`.
  * return value: `undefined`