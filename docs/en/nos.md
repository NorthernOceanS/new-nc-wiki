# NOS

NOS, short hand of **NOS Operation Script**  is an experimental feature of NC.

NOS program is a kind of program, which is independent of generator.

Here is a simple NOS rogram and the way to register it.

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
## Write a NOS Program

It also has `e`, just as functions on generator. But it have two unusual things, `args` and `input`.

`args` is an array of string. If you call it like `nc.cat -h`, the `args` will be `["nc.cat", "-h"]`.

`input` is used so that NOS Program can form a pipeline. The return value will be seen as output of the program. You can run NOS `nc.cat | nc.cat -h | nc.cat`, the output of `nc.cat` will be sent to next program `nc.cat -h`, and the output of `nc.cat -h` will be sent as input of third program `nc.cat`.

## Register a NOS Program

`system.registerNOSProgram(name, NameSpace)` is used in register NOS Programs. `NameSpace` should be an object, which is namespace of NOS programs. The `cat` function of namespace `nc` is refered as `nc.cat`.

There is also two functions called native NOS program, who haven't namespace, they are `set` and `add`.

## Run a NOS Program

Run a nos Program is not difficult.

If you want to call a NOS Program in function `generate` of generator, you can call `runtime.runNOS("nc.cat -h | nc.cat", undefined)`, `runNOS` will use the second parameter as input of first program in NOS, and the output of final program will be used as return value. The return value will be `undefined` here, because the two call of NOS program will just return its input to output. Also, "The program just pass its input to output" will be logged in info level. You can use `execl` or `execv` of Runtime API, but they are less recommanded.

In case you want to introduce space (` `) or pipeline operartor(`|`) in `args`, you can use single quotation mark (`'`) or double quotation mark (`"`) to warp it. `runtime.runNOS("nc.cat '-h -h'", undefined)` won't get `args` like `["nc.cat", "'-h", "-h'"]` but `["nc.cat", "-h -h"]`. You can also use escape character in quotation mark, the warpped string literal will be escape as JS string literal.

It's no need to worry about the compatiblity of `runNOS`, it is so-called system runtime API, so it will be able to run everywhere.

In some backend, you can use command `/nos:nosprogram` to run nosprogram, but this can not work on every backend.
