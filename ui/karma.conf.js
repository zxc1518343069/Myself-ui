var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: ['tests/**/*.spec.js'],// 监控文件目录
    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    autoWatch:true,
    webpack: webpackConfig,

    reporters: ['spec'],

    // browsers: ['Chrome'], // 启动浏览器测试
    browsers: ['ChromeHeadless'] // 启动无头浏览器
  })
}
