# NOS

NOS，**NOS Operation Script** 的简写，是 NC 的一个实验性功能。

NOS程序是一种独立于生成器的程序。

这是一个简单的 NOS 程序和注册方法。

```JS
import {systemInstance as system} from 'norma-core';
system.registerNOSProgram("nc", {
	cat: function (e) {
	    let {runtime, args, input} = e;
	    if((args[1] == "-h" || args[1] == "--help") && runtime.logger) {
	    	runtime.logger("info", "The program just pass its input to output");
	    }
	    return input;
	};
});
```
## 编写一个 NOS 程序

它也有`e`，就像生成器上的函数一样。但它有两个不常见的东西，`args` 和 `input`。

`args` 是一个string数组。如果你像 `nc.cat -h` 那样调用它，`args` 将是 `["nc.cat", "-h"]`。

使用 `input` 是为了让 NOS 程序可以形成一个管道。返回值将被视为程序的输出。你可以运行 NOS `nc.cat | nc.cat -h | nc.cat`，`nc.cat` 的输出将被发送到下一个程序`nc.cat -h`，而`nc.cat -h` 的输出将作为第三个程序`nc.cat` 的输入发送。

## 注册一个 NOS 程序

`system.registerNOSProgram(name, NameSpace)` 用于注册 NOS 程序。 `NameSpace` 应该是一个对象，它是 NOS 程序的命名空间。命名空间 `nc` 的 `cat` 函数称为 `nc.cat`。

还有两个函数被称为native NOS 程序，它们没有命名空间，它们是`set`和`add`。

## 运行一个 NOS 程序

运行一个 nos 程序并不难。

如果你想在生成器的`generate`函数中调用一个NOS程序，你可以调用`runtime.runNOS("nc.cat -h | nc.cat", undefined)`，`runNOS`将使用第二个参数作为输入传入第一个 NOS 中的程序，最后一个程序的输出将用作返回值。这里的返回值将是 `undefined`，因为 NOS 程序的两次调用只会将其输入返回到输出。此外，`The program just pass its input to output` 将记录在info级别。你也可以使用 Runtime API 的 `execl` 或 `execv`，但不太推荐使用它们。

如果你想在`args`中引入空格（` `）或管道操作符（`|`），你可以使用单引号（`'`）或双引号（`"`）来包裹它。`runtime.runNOS("nc.cat '-h -h'", undefined)` 不会像 `["nc.cat", "'-h", "-h'"]` 那样得到 `args` 而是 `[ "nc.cat", "-h -h"]`。你也可以在引号中使用转义字符，包裹的字符串字面量将像 JS 字符串字面量一样转义。

不用担心`runNOS`的兼容性，它就是所谓的 system runtime API，所以它可以到处运行。

在某些后端，你可以使用命令`/nos:nosprogram` 来运行nosprogram，但这并不能在每个后端都运行。
