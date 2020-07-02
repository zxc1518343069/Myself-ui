//  组件入口

import Button from './Button';
import Icon from './Icon';
import ButtonGroup from './ButtonGroup';

const install = (Vue)=>{
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
}

// 防止用户直接 script引入

if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
export default {
  install
}
