module.exports = {
    extends: ["eslint:recommended", "plugin:vue/vue3-recommended"],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    env: {
        amd: true,
        browser: true,
        es6: true,
    },
    rules: {
        indent: ["error", 2],
        quotes: ["error", "single"],
        semi: ["warn", "never"],
        "no-unused-vars": ["error", { vars: "all", args: "after-used" }],
        "comma-dangle": ["error", "always-multiline"],
        "vue/order-in-components": [
            "error",
            {
                order: [
                    "el",
                    "name",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    "inheritAttrs",
                    "model",
                    ["props", "propsData"],
                    "data",
                    "computed",
                    "watch",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    ["template", "render"],
                    "renderError",
                ],
            },
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "never",
            },
        ],
        "vue/html-closing-bracket-spacing": [
            "error",
            {
                startTag: "never",
                endTag: "never",
                selfClosingTag: "always",
            },
        ],
        "vue/script-indent": [
            "error",
            2,
            {
                baseIndent: 0,
                switchCase: 1,
                ignores: [],
            },
        ],
        "vue/max-attributes-per-line": [
            2,
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false,
                },
            },
        ],
    },
};
