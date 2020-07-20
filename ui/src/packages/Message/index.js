import Vue from 'vue'
import MessageCom from './Message.vue';

let instances = []
// 生成一个vue 的 子类
let MessageConstructor = Vue.extend(MessageCom)

const Message = (options)=>{
  options.close = function() {

    let length = instances.length
    instances.splice(0, 1);

    for (let i = 0; i < length - 1; i++) {
      let removedHeight = instances[i].$el.offsetHeight;
      let dom = instances[i].$el;
      dom.style['top'] =
        parseInt(dom.style['top'], 10) - removedHeight - 16 + 'px';
    }
  }
  let instance = new MessageConstructor({
    data: options,
  })
  instance.$mount()
  document.body.appendChild(instance.$el)

  let verticalOffset = 20;
  instances.forEach(item=>{
    verticalOffset += item.$el.offsetHeight + 16;  // 53 +16
  });
  instance.verticalOffset = verticalOffset;
  // console.log(verticalOffset)
  instance.visible = true
  // console.log(instance)
  instances.push(instance)
  return instance
}


['warning', 'error', 'success', 'info'].forEach(type=>{
  Message[type] = function(options) {
    options.type = type
    return Message(options)
  }
})


export default Message
