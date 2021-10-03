module.exports = {

    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/en/': {
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
        },
        '/zh-Hans/': {
            lang: 'zh-CN',
            title: 'VuePress',
            description: 'Vue 驱动的静态网站生成器',
        },
    },
    themeConfig: {
        sidebar: {
            '/zh-Hans/': [
                {
                    text: "目录",
                    link: '/index',
                    children: [
                        {
                            text: "欢迎！",
                            link: "welcome.md"
                        },
                        {
                            text: "使用教程",
                            link: "tutorial.md"
                        },
                        {
                            text: "另一个教程",
                            link: "yet-another-tutorial.md"
                        },
                        {
                            text: "开始",
                            link: "get-started.md"
                        },
                        {
                            text: "类型",
                            link: "types.md"
                        },
                        {
                            text: "使用经典生成器",
                            link: "using-canonical-generator.md"
                        },
                        {
                            text: "Event指引",
                            link: "guide-for-event.md"
                        },
                        {
                            text: "自定义生成器",
                            link: "custom-defined-generator.md"
                        },
                        {
                            text: "NOS",
                            link: "nos.md"
                        },
                        {
                            text: "参考",
                            link: "reference.md",
                            children: [
                                {
                                    text: "`System`类",
                                    link: "class-system.md"
                                },
                                {
                                    text: "`User`类",
                                    link: "class-user.md"
                                },
                                {
                                    text: "`Platform`接口",
                                    link: "interface-platform.md"
                                },
                                {
                                    text: "`Runtime`接口",
                                    link: "interface-runtime.md"
                                },
                                {
                                    text: "`Event`类",
                                    link: "class-event.md"
                                },
                                {
                                    text: "`Generator`接口",
                                    link: "interface-generator.md"
                                },
                            ]
                        }
                    ]
                }
            ],
            '/en/': [
                {
                    text: "Contents",
                    link: '/index',
                    children: [
                        {
                            text: "Introduction",
                            link: "welcome.md"
                        },
                        {
                            text: "Tutorial",
                            link: "tutorial.md"
                        },
                        {
                            text: "Yet Another Tutorial",
                            link: "yet-another-tutorial.md"
                        },
                        {
                            text: "Get Started",
                            link: "get-started.md"
                        },
                        {
                            text: "Types",
                            link: "types.md"
                        },
                        {
                            text: "Using Canonical Generator",
                            link: "using-canonical-generator.md"
                        },
                        {
                            text: "Guide for Event",
                            link: "guide-for-event.md"
                        },
                        {
                            text: "Custom Defined Generator",
                            link: "custom-defined-generator.md"
                        },
                        {
                            text: "NOS",
                            link: "nos.md"
                        },
                        {
                            text: "Reference",
                            link: "reference.md",
                            children: [
                                {
                                    text: "Class `System`",
                                    link: "class-system.md"
                                },
                                {
                                    text: "Class `User`",
                                    link: "class-user.md"
                                },
                                {
                                    text: "Interface `Platform`",
                                    link: "interface-platform.md"
                                },
                                {
                                    text: "Interface `Runtime`",
                                    link: "interface-runtime.md"
                                },
                                {
                                    text: "Class `Event`",
                                    link: "class-event.md"
                                },
                                {
                                    text: "Interface `Generator`",
                                    link: "interface-generator.md"
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    }
}