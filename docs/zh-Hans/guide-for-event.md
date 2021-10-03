# Event指南 #

Event是NC的一个概念。

对于规范生成器的开发者来说，仅有的两个Event回调函数是`generate`和`UIHandler`，如果你了解更多关于[自定义定义生成器](custom-defined-generator.md)，你会学到更多的这样的函数。

## 函数 `generate`

`generate` 是生成器最重要的功能之一，每次使用项目 `execute` 时都会调用它，并检查 `postion`、`blockType` 和 `direction` 的数量。

这里展示了一个 `generate` 函数，它只使用一个位置和一个 blockType 来生成一个块。
```JS
import {systemInstance as system, Block} from 'norma-core';
/*
** Many codes
*/
function (e) {
    let { state, runtime } = e;
    if(runtime.logger) {
        runtime.logger.log("verbose", "enter the generator");
    }
    return [new Block(state.positions[0], state.blockTypes[0])];
}
/*
** Many codes
*/
```
该功能将解释如下。
### 解构赋值和`e`

代码 `let { state, runtime } = e;` 是 JavaScript 中的解构赋值，如果你对 JavaScript 知之甚少，你可能会对此感到困惑。它实际上是 `let state = e.state; let runtime = e.runtime;`的语法糖，如果它仍然让你感到困惑，你可以使用 `let state = e.state; let runtime = e.runtime;` 或者让它保持不变。

如果你对 JavaScript 了解更多，你可以编写类似 `function ({ state, runtime }){...}` 这样的函数。它既不被推荐也没有被不推荐。

要了解更多信息，请参阅 [MDN上的解构分配的页面](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)。

### Runtime API 和 `runtime.logger`

Runtime API 是提供对平台的进一步访问的 API，例如 `logger`。但是，如果你想编写可移植的生成器，则应该对 Runtime API 加以更多的注意。

尽管 NC 试图使Runtime API 在不同的后端兼容。不同的后端仍然可以使用不同的 Runtime API。可能是平台原因造成的，例如，在 scripting API中无法访问文件系统。因此，你必须在使用每个 Runtime API 之前对其进行检查。尽管 `runtime.logger` 是最兼容的 API 之一，但我们仍然在使用前对其进行检查。

要了解有关 Runtime API 的更多信息，请参阅 [参考中的接口 runtime ](interface-runtime.md)。

### `state`
你已经在 [使用经典生成器](using-canonical-generator.md) 中了解了一些state。更多关于 `state` 的内容将在这里解释。

`state` 是 JavaScript 中的一个简单对象，它由规范生成器的 `option` 初始化。它是每个生成器每个用户存储数据的地方，因此数据不会相互混淆。在规范生成器中，存在三个现有属性：`positions`、`blockTypes`和`directions`，你可以使用 `state.positions`、`state.blockTypes` 和 `state.directions` 来引用它们。

### 返回值

返回值应该是一个数组。它可以是一个 `Block` 数组，如示例所示。它还可以有一些`BuildInstruction`类型的元素，做一些`Block[]`之外可以做的事情。

## 函数 `UIHandler`

首先使用代码`let { state, runtime, data } = e;`。 UIHandler 的 `e` 包含一个 `data`，它就是 `dataForUIHandler`，正如在 [使用经典生成器](using-canonical-generator.md) 中所说的那样。

你仍然可以像在函数`generate`中一样访问`state`和`runtime`。

`UIHandler` 的返回值不会被使用。

## Event

传统上，函数`generate`没有参数，函数`addPosition`有一个`Position`作为参数。然而，这并不适合多用户的情况。所以现在生成器上的每个函数都接收到一个名为`e`的参数。`e`有一些重要的属性。

一个 `e` 也有它应该具有的真实参数作为属性，例如，一个 `onAddPosition` 接收一个带有属性 `position` 的 `e`。

* `runtime`
  所有的`e`都有一个`runtime`作为属性。`runtime`上有许多所谓的RuntimeAPI，比如`logger`。要了解更多，请参见[接口`Runtime`](interface-runtime.md)。
* `state`
  现在，对于每个用户每个生成器，我们都有一个名为`state`的对象。由`e.state`，我们可以访问它们。所有没有被跨生成器和跨用户共享的数据都应该存储在state上。
* `session`
  与`state`不同，`session`是跨生成器的，它与每个用户相关。
