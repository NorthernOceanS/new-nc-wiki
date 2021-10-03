# Types

There are many types in NC, all of them are in "norma-core", which is an npm package. They are `Coordinate`, `Position`, `BlockType`, `Block`, `Direction`, `Usage`, `Description`, `BuildInstruction`. Among them, `Position`, `BlockType` and `Direction` are very important in NC, so they are called three fundamental types of NC. Even if you are a normal user of it, you will know them. `Usage`, `Description` are rarely used but still support. `Generator` is deprecated and will be never used.

## `Position`

A `Position` contain two property, one of it is `coordinate`. 

You can `new` a position like `new Position(new Coordinate(0, 0, 0))`. You can also use a simple object like `{x:0, y:0, z:0}` instead of using a `Coordinate`.

## `BlockType`

A `BlockType` contain two property, `blockIdentifier` and `blockState`.

You can `new` a blockType like `new BlockType("minecraft:air", {})`.

Currently it can't support tiledata. Add support of tiledata is in considering.

## `Direction`

A `Direction` contain two property, `x` and `y`.

You can `new` a direction like `new Direction(0, 0)`.



In most cases you will not create your own `Position`, `BlockType` or `Direction`, but use those form `state.positions`, `state.blockTypes`, `state.directions`.

`Block` and `BuildInstruction` are also important. `Block` will be intruduced here.

## `Block`

A `Block` contain two property, `position` and `blockType`, which in type `Position` and `BlockType`.

You can `new` a block like `new Direction(position, blockType)`, where `position` is a `Position` and `blockType` is a `BlockType`.
