import throttle from 'lodash.throttle'
// 自定义属性
const attributes = {
  delay: {
    default: 200
  },
  immediate: {
    default: true
  },
  disabled: {
    default: false
  },
  distance: {
    default: 10
  },

}


/**
 *  获取Scroll的容器元素
 * @param el 元素节点
 * @returns {(() => (Node | null))|ActiveX.IXMLDOMNode|(Node & ParentNode)|Window}
 */
const getScrollContainer = (el)=>{
  let parent = el
  while (parent) {
    if (document.documentElement === parent) {
      return window
    }
    // 获取元素是否有 overflow属性
    const overflow = getComputedStyle(parent)['overflow-y']
    if (overflow.match(/scroll|auto/)) {
      return parent
    }
    parent = parent.parentNode
  }
}

/**
 * 拿到传入的属性和默认属性进行比对  合并
 * @param el 节点
 * @param vm  Vue实例
 * @returns {{}}  合并后的属性
 */
const getScrollOptions = (el, vm)=>{
  // entries参考网址 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  return Object.entries(attributes).reduce((map, [key, option])=>{
    let defaultValue = option.default
    let userValue = el.getAttribute(`infinite-scroll-${ key }`)
    map[key] = vm[userValue] ? vm[userValue] : defaultValue
    return map
  }, {})
}

const handleScroll = function(cb) {
  let { container, el, vm,observer } = this['infinite-scroll'] // 绑定了this
  let { disabled,distance } = getScrollOptions(el, vm)
  if (disabled) return
  let scrollBottom = container.scrollTop + container.clientHeight
  if (container.scrollHeight - scrollBottom <= distance){
    cb()
  }else {
    if (observer){ // 接触监控
      observer.disconnect()
      this['infinite-scroll'].observer = null
    }
  }
}

export default {
  name: 'infinite-scroll',
  // 参考地址 https://cn.vuejs.org/v2/guide/custom-directive.html
  inserted(el, bindings, vNode) { // vNode里面有context可以访问上下文
    // 插入 指令生效
    console.log('指令生效')
    console.log(bindings.value) // 获取到fn
    console.log(vNode.context) // 获取虚拟实例 里面有属性
    let cb = bindings.value
    let vm = vNode.context
    // 1. 开始寻找循环的容器
    let container = getScrollContainer(el)
    console.log(container)
    if (container !== window) {
      console.log('绑定事件')
      // 2. 获取Options
      let { delay, immediate } = getScrollOptions(el, vm)
      // 3. 执行函数 节流 增加滚动事件
      let onScroll = throttle(handleScroll.bind(el, cb), delay)
      el['infinite-scroll'] = {
        container,
        onScroll, el, vm
      }
      if (immediate) {
        // MDN https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
        const observe =el['infinite-scroll'].observer= new MutationObserver(onScroll)  // 观察页面是否继续加载
        observe.observe(container, {
          childList: true,  // 监控孩子列表发生变化
          subtree: true  // 当子dom元素 发生变化也触发
        })
        onScroll() // 默认先加载
      }

      container.addEventListener('scroll', onScroll)
    }
  },

  unbind(el) {
    // 解除
    const { container, onScroll } = el
    if (container) {
      container.removeEventListener('scroll', onScroll)
      el['infinite-scroll'] = {}
    }
  }

}
