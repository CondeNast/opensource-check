module.exports = {
  extends: [
    "airbnb",
    "plugin:prettier/recommended"
  ],
  plugins: ['prettier'],
  rules: {
    "prettier/prettier": "error"
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    jest: true,
  }
};
