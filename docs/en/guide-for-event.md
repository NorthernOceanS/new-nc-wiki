# Guide for Event #

Event is a concept of NC.

For canonical generator developer, the only two Event callback function is `generate` and `UIHandler`, if you learn more about [custom defined generator](custom-defined-generator.md), you will learn more such function.

## Function `generate`

`generate` is one of the most important function of generator, it is called every time item `execute` is used, and numbers of  `postion`, `blockType` and `direction` are checked.

Here shows a `generate` function using just one position and one blockType to generate just one block.
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

The function will be explain as following.
### Destructuring Assignment and `e`

Code `let { state, runtime } = e;` is the destructuring assignment in JavaScript, if you know very few about JavaScript, you may be confused by that. It actually is a gramma suger for `let state = e.state; let runtime = e.runtime;` If it still confuse you, you can either use `let state = e.state; let runtime = e.runtime;` or just leave it not changed.

If you know more about JavaScript, you may write function like `function ({ state, runtime }){...}`. It is nither recommanded nor non-recommanded.

To know more, see [Page about destructuring assignment on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### Runtime API and `runtime.logger`

Runtime API is APIs provide you futher access to the platform, like `logger`. However, if you want to write transplantable generator, you should pay more attention on Runtime API.

Though NC is trying to make runtime API compatible on different backend. It is still possible for different backend having different runtime API. It may cause by platform, for example, it's impossible to access file system in scripting API. So you must test every Runtime API before use it. Though `runtime.logger` is one of the most compatible API, we still test it before using.

To know more about Runtime API, see [interface runtime in reference](interface-runtime.md).

### `state`
You have know some about state in [Using Canonical Generator](using-canonical-generator.md). More about `state` will be explained here.

`state` is a simple object in JavaScript, it is initialized by `option` of a canonical generator. It is the place for storing data per user per generator so data from won't be mixed with each other. In a canonical generator, there are three existing properties: "positions", "blockTypes" and "directions", you can use `state.positions`, `state.blockTypes` and `state.directions` to refer them.

### Retuen Value

The return value should be an array. It can be an array of `Block`, as shown in example. It can also have some of its item in type `BuildInstruction`, which can do some things other than `Block[]` can do.

## Function `UIHandler`

Use code `let { state, runtime, data } = e;` at first. The `e` of UIHandler contain a `data`, which is the `dataForUIHandler` as what have been told in [Using Canonical Generator](using-canonical-generator.md).

You can still access `state` and `runtime` as in function `generate`.

The retuen value of `UIHandler` won't be used.

## Event

Traditionally, function `generate` have no arguments, function `addPosition` has a `Position` as its argument. However, This is shown not fit multi-user situation. So now every function on generator receive an argument named `e`. And the `e` have some import properties on it.

* `runtime`
  All `e` have a `runtime` as property. The `runtime` have many so called runtime API as `logger`. To know more, see [Interface `Runtime`](interface-runtime.md).
* `state`
  Now we have an object called `state` for every user every generator. By `e.state`, we can access to them. All data not shared cross generate and cross user should be stored on `state`.
* `session`
  Instead of `state`, `session` is cross generator, it's related to each user.

An `e` also have the real argument it should have as property, for example, a `onAddPosition` receive an `e` with property `position`.
