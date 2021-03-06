module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: "off",
    quotes: [0, "always"],
    "eol-last": "off",
    "space-before-function-paren": "off"
  }
};
