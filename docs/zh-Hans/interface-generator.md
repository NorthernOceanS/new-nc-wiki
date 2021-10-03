# `Generator`接口

具有以下功能的任何对象都可以视为`Generator`并注册。


* `generator.name` 字符串
* `generator.onAddPoistion(e)`
  * `e`: 一个`AddPoistionEvent`
  * 返回值: `undefined`
* `generator.onAddBlockType(e)`
  * `e`: 一个`AddBlockTypeEvent`
  * 返回值: `undefined`
* `generator.onAddDirection(e)`
  * `e`: 一个`AddDirectionEvent`
  * 返回值: `undefined`
* `generator.onRemovePoistion(e)`
  * `e`: 一个`RemovePoistionEvent`
  * 返回值: `undefined`
* `generator.onRemoveBlockType(e)`
  * `e`: 一个`RemoveBlockEvent`
  * 返回值: `undefined`
* `generator.onRemoveDirection(e)`
  * `e`: 一个`RemoveDirectionEvent`
  * 返回值: `undefined`
* ~`generator.isValidParameter(e)`~
  * `e`: 一个`ValidateParameterEvent`
  * 返回值: 布尔
* `generator.generate(e)`
  * `e`: 一个`Event`
  * 返回值: `undefined`
