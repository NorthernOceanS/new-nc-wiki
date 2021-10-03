# 类型

NC中有很多类型，都在一个npm包，`norma-core`中。它们是`Coordinate`、`Position`、`BlockType`、`Block`、`Direction`、`Usage`、`Description`、`BuildInstruction`。其中，`Position`、`BlockType`和`Direction`在 NC 中非常重要，因此被称为 NC 的三种基础类型。即使你是它的普通用户，你也会了解它们。 `Usage`、`Description` 很少使用但仍然支持。 `Generator` 已弃用，永远不会使用。

## `Position`

`Position` 包含两个属性，其中之一是 `coordinate`。

你可以像`new Position(new Coordinate(0, 0, 0))`这样`new`一个position。你还可以使用像 `{x:0, y:0, z:0}` 这样的简单对象来代替使用 `Coordinate`。

## `BlockType`

`BlockType`包含两个属性，`blockIdentifier`和`blockState`。

你可以像`new BlockType("minecraft:air", {})`这样`new`一个blockType。

目前它不能支持tiledata。正在考虑添加对 tiledata 的支持。

## `Direction`

一个 `Direction` 包含两个属性，`x` 和 `y`。

你可以`new`一个像`new Direction(0, 0)`这样的方向。



在大多数情况下，你不会自己创建`Position`、`BlockType`或`Direction`，而是从`state.positions`、`state.blockTypes`、`state.directions`中使用。

`Block` 和 `BuildInstruction` 也很重要。这里将介绍`Block`。

## `Block`

`Block`包含两个属性，`position`和`blockType`，它们的类型为`Position`和`BlockType`。

你可以像`new Direction(position, blockType)`这样`new`一个block，其中`position`是一个`Position`，`blockType`是一个`BlockType`。
