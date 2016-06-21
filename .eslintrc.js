module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 注释风格要不要有空格什么的
    "spaced-comment": 0,
    // 多余的分号
    "no-extra-semi": 0,
    // 行尾缺少分号可能导致一些意外情况
    "no-unexpected-multiline": 2,
    // 空代码块
    "no-empty": 1
  }
}
