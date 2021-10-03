# Get Started #

## Installation ##

NormaConstructor requires nodejs and git.

If you don't have nodejs, install [it](https://nodejs.org/) now.

If you don't have git, install [it](https://git-scm.com/) now.

Now you can clone the repository.

```shell
$ git clone https://github.com/NorthernOceanS/NormaConstructor.git
$ cd NormaConstructor
$ npm install
```

If you are in China mainland, you can clone from a mirror (not synchronously update).

```shell
$ git clone https://e.coding.net/Northern_OceanS/NormaConstructor/NormaConstructor.git
```

## Hello World ##

The project have a structure like this, and to write a new `Generator`,

all you need to do is creating a folder with a file `index.js` in `packs/behaviors/scripts/plugin/`.

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

The **blod** ones is created by you.

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

To know more, see following sections.

##  plugin location

All plugins are enclosed by a folder and placed inside the `plugin` folder. An `index.js` must be present.

* plugin
  * nc
    * index.js
  * hello
    * index.js
  * ...

The folder `nc` contain the offical `Generator`s of **NC**.

## `system` API ##

`system` is a global unique object.

### Register API ###

`system.registerGenerator()` is one of the most useful API.

It can be used to register `Generator`s  to the system.

However, you may find `system.registerCanonicalGenerator()` more useful.

`system.registerNOSProgram()` is an API which can register a command parser to system.


### Runtime API ###

**Runtime API can only used in runtime.**

The runtime will provide API like `runtime.getBlock()` in runtime.

Runtime API may be platform dependant, because some platform may haven't feature other platforms have.

## Scripts ##

The project use [minecraft-addon-toolchain](https://minecraft-addon-tools.github.io/)

as its dependence, so it can use scripts

```shell
$ npm run build
$ npm run watch
$ npm run installaddon
$ npm run uninstalladdon
$ npm run packageaddon
```

You can

use `npm run build` to create the structure of a mcaddon,

use `npm run installaddon` to install the addon for Win10,

use `npm run uninstalladdon` to uninstall the addon for Win10,

use `npm run packageaddon` to create a mcaddon package,

or do other things you want.