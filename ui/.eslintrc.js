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
    'no-console': 'off',
    'no-debugger': 'off',
    indent: ['off', 2],
    'space-before-function-paren': 0,
    'comma-dangle': [2, 'never'],
    'arrow-spacing': [
      2,
      {
        before: false,
        after: false
      }
    ],
    'template-curly-spacing': [
      'error',
      'always'
    ]
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
  ],

  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ]
}
