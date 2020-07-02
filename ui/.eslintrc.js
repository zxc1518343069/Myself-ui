module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "indent": ["off", 2],
    "space-before-function-paren": 0,
    "comma-dangle": [2, "never"],
    //箭头函数中的箭头前后需要留空格
    "arrow-spacing": [
      2,
      {
        "before": false,
        "after": false
      }
    ],
    // 模板字符串 空格
    "template-curly-spacing": ["error", "always"]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
