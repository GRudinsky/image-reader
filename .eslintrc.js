module.exports = {
  root: true,
  env: {
    jest: true,
  },
  extends: "airbnb-base",
  rules: {
    quotes: ["error", "double"],
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-return-assign": 0,
    camelcase: 0,
    excludeFiles: ["dist/**/*"],
  },
};
