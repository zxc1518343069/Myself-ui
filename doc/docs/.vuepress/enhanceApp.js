import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

import acUi from '../../../ui/dist/ac-ui.umd.min'
import '../../../ui/dist/ac-ui.css'

Vue.directive('highLight', function(el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block=>{
    hljs.highlightBlock(block)
  })
})

export default ({
  Vue, options, router, siteData
})=>{
  Vue.use(Element)
  Vue.use(acUi)
}

