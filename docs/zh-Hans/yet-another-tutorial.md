欢迎使用**NormaConstructor**！

**NormaConstructor** 是一个开源快速构建插件，目前运行在 [scripting API](https://bedrock.dev/zh/docs/stable/Scripting) 和 [lxl](https://lxl.litetitle.com/)。

**注意**：如果你在scripting中使用 **NormaConstructor**，请启用“实验性玩法”的“其他修改功能”选项。

* 首先，使用函数`\function getTools` 获取**NormaConstructor** 需要的所有工具。
  **注意**：你必须是OP才能执行 `\function` 命令。
* 现在你可以尝试第一个生成器“两点生成”。
* 在两个任意位置的两个方块上使用物品`get position`，这些位置将被记录。
* 使用几次物品`remove last blockType` 删除所有已经记录的方块类型，以防你偶然存储一些方块类型。
* 放置任意方块，它的方块类型将被记录。
* 使用物品`execute`。
* 如果你这样做了，将生成一个以两个记录的位置为顶点的长方体，它的方块类型将是你记录的方块类型。
* 注意长方体中的所有内容都将被填充。

**NormaConstructor** 不难使用，不是吗？

这是关于你所做的进一步解释。

**NormaConstructor** 中的每个生成器都自己存储了“位置”、“方块类型”和“方向”数据，存储的数据不会与其他玩家或其他生成器存储的数据混淆。

当你使用物品 `get position` 时，会记录你当前使用物品的方块的位置。当你放置方块时，会记录方块的方块类型。你可以使用物品`get air`来储存空气方块类型，因为你不能把空气作为方块放置。

不同的生成器需要不同数量的数据，第一个生成器“两点生成”需要两个位置，一个方块类型和零个方向。

可以使用物品`remove last blockType`删除最后记录的方块类型，当然也可以用其它的物品删除最后记录的`postion`或`direction`。

一些生成器需要除“位置”、“方块类型”和“方向”之外的数据，对于这些生成器，你可以使用物品`show menu`打开配置这些生成器的 UI。

你可以使用物品 `choose next generator` 切换生成器，但使用UI切换生成器更有效。 (**NormaConstructor** 在 lxl 上还没有办法使用`choose next generator`以外的方法切换生成器，很快就会修复)。

**NormaConstructor**有非常详细的日志记录发生的所有事情。如果你不需要它们，你可以通过UI将日志级别更改为“info”(**NormaConstructor** 在 lxl 上还没有办法使用改变日志级别，很快就会修复)。

关于使用**NormaConstructor**，还有一个[bilibili上的视频](https://www.bilibili.com/video/BV1Wh411d7QN)，你可以从它了解单独每个生成器的更多信息。

如果你没有看懂上面的教程，可以阅读[另一个教程](tutorial.md)
