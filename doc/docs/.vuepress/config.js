module.exports = {
  title: 'ac-ui',
  description: '阿琛学习搭建ui',
  dest: './dist', // 打包输出目录
  port: 8001, // 端口
  // 配置导航栏nav
  themeConfig: { // 主题配置
    displayAllHeaders: true,
    nav: [{
      text: '主页',
      link: '/'
    }], // 导航条

    sidebar:
        {
          '/components/': [
            {
              title: 'Base',
              collapsable: true,
              children: [
                'button',
              ]
            },
            {
              title: '布局组件',
              collapsable: true,
              children: [
                'layout',
                'container'
              ]
            },
            {
              title: 'Form',
              collapsable: true,
              children: [
                'input',
                'upload'
              ]
            }
          ],
        }
  }
}
