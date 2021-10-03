# Custom Defined Generator #

You already can use `system.registerCanonicalGenerator()` to register a canonical Generator to system. However, if you want freedom other than canonical Generator, you can define your own Generator.

`Generator` is a object with a couple of functions, so any object with such functions can be registered as `Generator`.


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

All of these functions have . For `onInit`, `isValidParameter`, `generate`, `onExit`, the `e` only contain `state` and `runtime`. For `onAddPosition`, `onAddBlockType` and `onAddDirection`, `e` respectively contain `position`, `blockType` or `direction`, of course also having `state` and `runtime`. For `onRemovePoistion`, `onRemoveBlockType` and `onRemoveDirection`, `e` contain `state`, `runtime` and `index`.

There is also three function `onBlur`, `onFocus` and `onItemUsed`, which are optional. `onBlur`, `onFocus` will be called every time generator is switched. If these function doesn't exist, they won't be called either.

**NOTICE**: The items `remove_last_position`, `remove_last_direction` and `remove_last_blocktype` will call them with `index` as `undefined` and there is actually no current way call these function with number as `index`, But please be careful to test `index` everytime in case we add such method.

## Difference of Canonical Generator and Custom Defined Generator
Writing Canonical Generator and Custom Defined Generator is very different. There are main Difference between canonical generator and custom defined generator:
* Custom defined generator have no `description`, but just `name` and `ui`, which is `description.name` and `description.usage.optionUsage` in canonical generator.
* Custom defined generator have no `option`, you should write onInit to initialize the `state` yours.
* Custom defined generator have no "positions", "blockTypes" and "directions" on `state`. You can use these key yourself if you like. Notice that you still can't use key begin with double underscores. If one of `onAddPosition`, `onAddBlockType`, `onAddDirection`, `onRemovePoistion`, `onRemoveBlockType` and `onRemoveDirection` failed, you had better use `runtime.logger` to log some information to user to correct. The way using logger is often `logger.log("error", "Some message");`.
* Custom defined generator have `isValidParameter`, which should return a boolean. It is called everytime item `execute` is used. If it return `true`, the `execute` will continue and `generate` will be called, otherwise it will stop. You had better use `runtime.logger` to log some information to user to correct.
* Canonical generator remove all "positions", "blockTypes" and "directions" after `generate` is called, if you write your own "positions", "blockTypes" and "directions", you shold remove them yourself.

"norma-core" also provide `canonicalGeneratorFactory`, if you call it with an argument object config the canonical generator, it will create a canonical generator for you.

Actually, `system.registerCanonicalGenerator(o)` is a shorthand of `system.registerGenerator(canonicalGeneratorFactory(o))`.
