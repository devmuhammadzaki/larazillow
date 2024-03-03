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
        "no-unused-vars": "off",
        "no-undef": "off",
        indent: ["warn", 4],
        "linebreak-style": ["warn", "unix"],
        quotes: ["warn", "double"],
        semi: ["warn", "always"],
        "no-console": "off",
        "vue/html-indent": ["warn", 4],
        "vue/multi-word-component-names": "off",
        "vue/max-attributes-per-line": [
            "warn",
            {
                singleline: 2,
                multiline: 1,
            },
        ],
    },
};
