# Using Canonical Generator #

Canonical generator is a kind of generator with certain features. Canonical generators are so common, so that NC have designed a method to register a canonical generator to `system`: `registerCanonicalGenerator`.

**a canonical generator is a generator with fixed number of positions, fixed number of block types and fixed number of directions.**   

**If you want a generator haven't these features, don't use `registerCanonicalGenerator`.**

The `registerCanonicalGenerator` receive an argument object with certain properties, allowing you to control the setting of the generator. Here is an example of using of `registerCanonicalGenerator`:
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

Here a simple explaination:

* `description`
  * `name`: a string.
    It is a string description what the generator is.
  * `usage`: an object.
    Currently, only `optionUsage` of `usage` is used to set UI.
    The `optionUsage` will be explained following.
* `criteria`: an object.
  The three properties of it: `positionsLength`, `blockTypesLength` and `directionsLength` are used to set the number of positions, of block types and of directions.
* `option`: an object, will be explained following.
* `method`
  * `generate`
  * `UIhandle`
  These two will be detailly explained in [Guide for Event](guide-for-event.md).

## optionUsage
`optionUsage` is an array and it decided the UI.
**NOTICE**: the name of `optionUsage` have no meaning currently.
A typical `optionUsage` is as follows:

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

* "viewtype", a string specifies what kind of element your UI element is. Currently, only **`text`**, **`button`**, **`edittext`**and **`checkbox`** are supported, they respectively represent plain text, button, text box (currently only numbers can be entered) and check boxes.
* "text" specifies the descriptive text on the left side of the UI.

If you are writing **`text`**, it will only have these two propertes. If you are writing the other three, it will have more:

* "key" specifies which property of the `state` will be bind to data in UI. This can be understood as a binding: `key: "aaa"` means that this UI element will modify `state["aaa"]`. (**NOTICE**: don't use "positions", "blockTypes" and "directions" as key, also don't use key begin with double underscores, because it is use by offical)
* "data" is an array, it only appears in buttons and checkboxes. Each element in this array contains `value` and `text`, some of them also contains `dataForUIHandler`. Each time the button/checkbox is clicked, the `text` of the next element is displayed on the button/checkbox, and the `value` will be setted as the value of `state[key]`, when `dataForUIHandler` exist, the `UIHandler` of the generator will be be called with data of `dataForUIHandler`. if `state[key]` is initialized by `option`, it will be the default state. If it does not exist or is `undefined`, the first element in the array will be selected.
* **Deprecated** "default" only appears in edittext. If `state[key]` does not exist, this value is used as the default value displayed by edittext. (Deprecated and not recommend)

## Option
`option` is a simple object in JavaScript. It is used to initialize the `state`.

However, it must be able to be transformed to JSON and be transformed back, because NC will use this way to deep copy the option so that it can be used to initialize `state`.

Some of the key of `state` will be used by NC itself. The keys will have two underscores at the beginning. For example, "\_\_serverGeneratorIdentifier" and "\_\_generateByServer" (in fact, these are the only two currently used). Therefore, it is recommended not to arbitrarily set key begin with double underscores to avoid compatibility problems. 
