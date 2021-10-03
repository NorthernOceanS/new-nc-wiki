# 自定义生成器 #

你可以使用`system.registercanonicalgenerator()`注册一个标准生成器。但是，如果你想要标准生成器以外的功能，你可以自定义生成器。
`Generator`是一个带有若干个函数的接口，所以任何带有这些函数的对象都可以注册为`Generator`。
更多关于`Generator`的介绍，详见[Generator接口](interface-generator.md)。

```JS
// in plugin/my-generator/index.js
import {systemInstance as system} from 'norma-core';

system.registerGenerator({
    name: "generator-name",
    ui: [],
    onInit(e) {
        e.state.positions = [];
    },
    onAddPosition(e) {
        e.state.positions.push(e.position);
    },
    onAddBlockType(e) { /* no-op */ },
    onAddDirection(e) { /* no-op */ },
    onRemovePoistion(e) { /* no-op */ },
    onRemoveBlockType(e) { /* no-op */ },
    onRemoveDirection(e) { /* no-op */ },
    isValidParameter(e) { /* no-op */ },
    generate(e) { /* no-op */ },
    UIHandler(e) { /* no-op */ },
    onExit(e) { /* no-op */ },
});

```


所有这些函数都接受`e`。对于`onInit`、`isValidParameter`、`generate`、`onExit`，`e` 只包含`state` 和`runtime`。对于`onAddPosition`、`onAddBlockType`和`onAddDirection`，`e`分别包含`position`、`blockType`或`direction`，当然也包含`state`和`runtime`。对于`onRemovePoistion`、`onRemoveBlockType` 和`onRemoveDirection`，`e` 包含`state`、`runtime` 和`index`。

还有三个函数`onBlur`、`onFocus`和`onItemUsed`，它们是可选的。 `onBlur`、`onFocus` 将在每次切换生成器时被调用。如果这些函数不存在，它们不会被调用。

**注意**：`remove_last_position`、`remove_last_direction` 和`remove_last_blocktype` 项会以`index` 为`undefined` 调用它们，实际上目前还没有以number为`index` 的方式调用这些函数，但请注意每次都要小心测试`index`，以防我们添加这样的方式。

## 经典生成器和自定义生成器的区别
编写经典生成器和自定义生成器是非常不同的。经典生成器和自定义生成器之间的主要区别：
* 自定义生成器没有`description`，只有`name` 和`ui`，即经典生成器中的`description.name` 和`description.usage.optionUsage`。
* 自定义生成器没有 `option`，你应该编写 `onInit` 来初始化你的 `state`。
* 自定义生成器在 `state` 上没有"positions", "blockTypes" 和 "directions"。如果你愿意，你可以自己使用这些key。请注意，你仍然不能使用以双下划线开头的key。如果 `onAddPosition`、`onAddBlockType`、`onAddDirection`、`onRemovePoistion`、`onRemoveBlockType` 和 `onRemoveDirection` 之一失败，你最好使用 `runtime.logger` 记录一些信息给用户纠正。使用logger的方式通常是`logger.log("error", "Some message");`。
* 自定义生成器有 `isValidParameter`，它应该返回一个boolean。每次使用物品`execute`时都会调用它。如果它返回 `true`，`execute` 将继续并调用 `generate`，否则它将停止。你最好使用 `runtime.logger` 来记录一些信息给用户纠正。
* 经典生成器在调用`generate` 后删除所有"positions", "blockTypes" 和 "directions"，如果你自己编写"positions", "blockTypes" 和 "directions"，你应该自己删除它们。

`norma-core`还提供了`canonicalGeneratorFactory`，如果你用配置经典生成器的参数对象调用它，它会为你创建一个经典生成器。

实际上，`system.registerCanonicalGenerator(o)`是`system.registerGenerator(canonicalGeneratorFactory(o))`的简写。
