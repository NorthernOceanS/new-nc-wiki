Welcome using **NormaConstructor**!

**NormaConstructor** is a open source fast building addon currently runs on [scripting API](https://bedrock.dev/zh/docs/stable/Scripting) and [lxl](https://lxl.litetitle.com/).

**NOTICE**: If you are using **NormaConstructor** on scripting, please enable `Additional Modding Capabilities` option of `Experimental Gameplay`.

* Firstly, using function `\function getTools` to get all tools needed by **NormaConstructor**.
  **NOTICE**: You must be an Operator to excute `\function` command.
* Now you can try the first generator "Create a solid cube with two points".
* Use item `get position` on two blocks at two arbitrary positions, those positions will be recorded.
* Use item `remove last blockType` some times to remove all recorded blockTypes in case you occasionally store some blockType.
* Place any block, its blockType will be recorded.
* Use item `execute`.
* If you done those, a cuboid having the two recorded postion as vertex will be generated, and its blockType will be blockType you have recorded.
* Notice everything in the cuboid will be filled.

**NormaConstructor** is not difficult to use, isn't it?

And here is a further expiain about what you have done.

Each generator in **NormaConstructor** store `postion`, `blockType` and `direction` in itself, and the stored data won't be confused with data stored by other player or other generator.

When you use item `get position`, a position of the block you current use item on is recorded. When you place a block, a blockType of the block is recorded. You can use item `get air` to store air blockType since you can't place air block.

Different generator need different number of those data, the first generator "Create a solid cube with two points" needs two positons, one blockType and zero direction.

You can use item `remove last blockType` to remove last recorded blockType, of course you can also remove last recorded `postion` or `direction` by other items.

Some generator need data other than `postion`, `blockType` and `direction`, for those generator, you can use item `show menu` to open an UI configing those generator.

You can use item `choose next generator` switch generator, but it's more effectively to use UI to switch generator (**NormaConstructor** on lxl still haven't mothod to switch generator other than the item, which will be fixed soon).

There is very verbose log logging everything happen in **NormaConstructor**. If you don't need them, you can change log level to "info" by UI (**NormaConstructor** on lxl still haven't mothod to change the log level, which will be fixed soon).

There is also a [vedio on bilibili](https://www.bilibili.com/video/BV1Wh411d7QN) about using **NormaConstructor**, you can learn more about every generator separately form it.

If you did not understand the above tutorial, you can read [another tutorial](tutorial.md)
