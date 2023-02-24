/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  rules: {
    "no-useless-escape": 0,
    "no-restricted-globals": "warn",
    "no-unused-vars": "off",
    semi: ["error", "always"],
    "react/jsx-no-comment-textnodes": 0,
  },
};
