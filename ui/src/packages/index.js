//  组件入口

import Button from './button/Button';
import Icon from './button/Icon';
import ButtonGroup from './button/ButtonGroup';
import Col from './layout/Col';
import Row from './layout/Row';

import container from './container/container';
import aside from './container/aside';
import footer from './container/footer';
import main from './container/main';
import header from './container/header';
import input from './Form/input';
import upLoad from './Form/upLoad';
import progress from './progress';
import datePack from './datePack/date-pick'
import dateRangePack from './datePack/date-range-pick'
import Switch from './switch/Switch';
import infiniteScroll from './infiniteScroll';
import Message from './Message';
import popover from './popover/popover';
import Vue from 'vue';

const install = (Vue)=>{
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Col.name, Col)
  Vue.component(Row.name, Row)
  Vue.component(container.name, container)
  Vue.component(aside.name, aside)
  Vue.component(footer.name, footer)
  Vue.component(main.name, main)
  Vue.component(header.name, header)
  Vue.component(input.name, input)
  Vue.component(upLoad.name, upLoad)
  Vue.component(progress.name, progress)
  Vue.component(datePack.name, datePack)
  Vue.component(dateRangePack.name, dateRangePack)
  Vue.component(Switch.name, Switch)
  Vue.component(popover.name, popover)
  // 指令
  Vue.directive(infiniteScroll.name,infiniteScroll)
}

// 防止用户直接 script引入


Vue.prototype.$message = Message

if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
export default {
  install
}
