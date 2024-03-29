/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["@repo/eslint-config/react.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
    },
    rules: {
        "react/function-component-definition": "off",
        "unicorn/filename-case": "off",
    },
};
