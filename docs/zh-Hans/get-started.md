# 开始 #

## 安装 ##

NormaConstructor 需要 nodejs 和 git。

如果你没有 nodejs，请立即安装[它](https://nodejs.org/)。

如果你没有 git，请立即安装[它](https://git-scm.com/)。 

现在你可以克隆仓库了。

在终端执行：
```shell
$ git clone https://github.com/NorthernOceanS/NormaConstructor.git
$ cd NormaConstructor
$ npm install
```

如果你在中国大陆，可以从镜像克隆（不同步更新）。

```shell
$ git clone https://e.coding.net/Northern_OceanS/NormaConstructor/NormaConstructor.git
```

## Hello World ##
该项目具有这样的结构，并且要编写一个新的`Generator`，
你需要做的就是在 `packs/behaviors/scripts/plugin/` 中创建一个包含文件 `index.js` 的文件夹。
.

  * packs 
    * behaviors
      * scripts
        * client
          * client.js
        * system.js
        * plugin
          * nc
            * index.js
          * **hello**
            * **index.js**
          * ...
        * ...
    * resources
    * ...

**粗体** 是你创造的。

```JS
// in plugin/hello/index.js
import {systemInstance as system} from 'norma-core';
system.registerCanonicalGenerator({
    name: "hello world",
    criteria: {
        positionsLength: 0,
        blockTypesLength: 0,
        directionsLength: 0,
    },
    method: {
        generate: function (e) {
            return [];
            // the Generator can not actually generate anything,
            // but it can be a sample of how to register a generator.
        }
    }
});

```
更多信息请参见以下部分。


## 插件的位置

所有的插件都被应该封装在一个文件夹中，放在`/packs/behaviors/scripts/plugin/`。`index.js`为入口。

* plugin
  * nc
    * index.js
  * hello
    * index.js
  * ...

文件夹 `nc` 包含 **NC** 的官方生成器。

## `system` API ##
`system` 是一个全局唯一的对象。

### 注册 API ###
`system.registerGenerator()`可以用来注册生成器。（常用）

`system.registerNOSProgram()`可以注册命令解析器。

### Runtime API ###
**Runtime API 只能在运行时中使用**

`runtime`将在运行时中提供像`runtime.getblock()`这样的 API 。

运行时 API 可能依赖于平台，因为某些平台可能没有其他平台具有的功能。

## 脚本 ##
此项目使用了[minecraft-addon-toolchain](https://minecraft-addon-tools.github.io/)，
所以可以使用

```shell
$ npm run build
$ npm run watch
$ npm run installaddon
$ npm run uninstalladdon
$ npm run packageaddon
```
你可以

使用 `npm run build` 来创建一个 mcaddon 的结构，

使用 `npm run installaddon` 安装 Win 10 的插件，

使用 `npm run uninstalladdon` 卸载 Win 10 的插件，

使用 `npm run packageaddon` 创建一个 mcaddon 包，

以此类推。
