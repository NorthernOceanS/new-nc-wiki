# 使用经典生成器

经典生成器是一种具有一定特征的生成器。经典生成器非常常见，因此NC设计了一种方法来将经典生成器注册到system: `registerCanonicalGenerator`。

**一个经典生成器是一个具有固定数量的位置、固定数量的方块类型和固定数量的方向的生成器。**

**如果你想要一个没有这些特性的生成器，不要使用`registerCanonicalGenerator`**

`registerCanonicalGenerator`接收一个具有特定属性的对象，允许你控制生成器的设置。参见`registerCanonicalGenerator `的一个使用示例:
```JS
system.registerCanonicalGenerator({
    description: {
        name: "example generator",
        usage: {
            positionUsage: [],
            blockTypeUsage: [],
            directionUsage: [],
            optionUsage: []
        }
    },
    criteria: {
        positionsLength: 0,
        blockTypesLength: 0,
        directionsLength: 0,
    },
    option: {},
    method: {
        generate: function (e) {
            return [];
            // the Generator can not actually generate anything,
            // but it can be a example of how to register a generator.
        UIhandler: function (e) {
            //empty
        }
    }
});
```

这些属性将被解释如下。

* `description`
  * `name`: 一个string。
    它是一个描述生成器是什么的字符串。
  * `usage`: 一个object。
    目前，只有`usage`中的`optionUsage`被使用，用于设置UI。
    `optionUsage` 将在下面解释。
* `criteria` : 一个object。
  它的三个属性: `positionsLength`,`blockTypesLength`和`directionsLength`用于设置位置、方块类型和方向的数量。
* `option`：一个对象，下面会解释。
* `method`
  * `generate`
  * `UIhandler`
  参见[Event指引](guide-for-event.md)。


## optionUsage
`optionUsage` 是一个数组，它决定了 UI。
**注意**：`optionUsage` 的名称目前没有意义。
一个典型的`optionUsage`如下：


```JS
[
    {
        viewtype: "text",
        text: "NZ IS JULAO."
    },
    {
        viewtype: "button",
        text: "Yes, NZ is JULAO.",
        key: "CCC",
        data: [
            {
                value: "red",
                text: "Choosing red"
            },
            {
                value: "blue",
                text: "Choosing blue"
            },
            {
                value: "yellow",
                text: "Choosing yellow"
            }
        ]
    },
    {
        viewtype: "edittext",
        text: "Of course, NZ is JULAO.",
        key: "BBB",
        default: 999
    },
    {
        viewtype: "checkbox",
        text: "We all agree, NZ is JULAO.",
        key: "AAA",
        data: [
            {
                value: true,
                text: "Yes"
            },
            {
                value: false,
                text: "OK."
            }
        ]
    }
]
```

* "viewtype"，一个字符串指定你的 UI 元素是什么类型的元素。目前仅支持`text`、`button`、`edittext`和`checkbox`，分别代表纯文本、按钮、文本框（目前仅支持数字）和复选框。
* "text" 指定 UI 左侧的描述性文本。

如果你在写`text`，它就只有这两个属性。如果你正在编写其他三个，它将有更多：

* "key" 指定 `state` 的哪个属性将绑定到 UI 中的数据。这可以理解为一个绑定：`key: "aaa"` 表示这个 UI 元素会修改 `state["aaa"]`。 （**注意**：不要使用`positions`、`blockTypes`和`directions`作为key，也不要使用双下划线开头的key，因为这是官方使用的）
* "data" 是一个数组，它只出现在按钮和复选框中。这个数组中的每个元素都包含 `value` 和 `text`，其中一些还包含 `dataForUIHandler`。每次单击按钮/复选框时，按钮/复选框上都会显示下一个元素的`text`，并且`state[key]`的值将被设置为`value`，当`dataForUIHandler`存在时，生成器的`UIHandler` 将被`dataForUIHandler` 的数据调用。如果 `state[key]` 被 `option` 初始化，它将是默认状态。如果它不存在或为`undefinded`，则将选择数组中的第一个元素。
* **已弃用**"default"仅出现在编辑文本中。如果`state[key]` 不存在，则该值用作edittext 显示的默认值。 （已弃用，不推荐）

## option
`option` 是 JavaScript 中的一个简单对象。它用于初始化`state`。

但是，它必须能够转换为 JSON 并转换回来，因为 NC 将使用这种方式对选项进行深拷贝，以便它可以用于初始化 `state`。

`state` 的一些key会被 NC 自己使用。这些key开头有两个下划线。例如，`__serverGeneratorIdentifier`和`__generateByServer`（实际上目前仅使用这两个）。所以建议不要随意设置key为双下划线开头，以免出现兼容性问题。
