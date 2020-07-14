import { shallowMount } from '@vue/test-utils'; // vue提供快速测试方法
import { expect } from 'chai'
import Button from '../src/packages/button/Button';
import Icon from '../src/packages/button/Icon';


describe('测试',()=>{
  it('1. 测试获取body颜色值', function() {
    expect(getComputedStyle(document.body).color).to.eq('rgb(0, 0, 0)')
  });
})

describe('button.vue',()=>{
  it('1.测试button能否正常显示slot里的内容',()=>{ // 测试当前组件运行在浏览器的情况
    const wrapper = shallowMount(Button,{
      slots:{
        default:'ac-ui'
      }
    });
    console.log(wrapper.vm.$el) //wrapper 包裹器 可以取出实例
    expect(wrapper.text()).to.eq('ac-ui'); // api 获取文本
  })
  it('2.测试icon传入是否能正常显示',()=>{
    const wrapper = shallowMount(Button,{
      stubs:{
        'ac-icon':Icon // 替换的功能 把ac-icon 替换成Icon
      },
      propsData:{
        icon:'edit'
      }
    });
    // 找到use 标签 找到属性
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-edit')
  })
  it('3.测试loading时 按钮是禁用状态',()=>{
    const wrapper = shallowMount(Button,{
      stubs:{
        'ac-icon':Icon // 替换的功能
      },
      propsData:{
        loading:true
      }
    });
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-xingzhuang');
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled')
  })
  it('4.测试按钮能否正常点击',()=>{
    const wrapper = shallowMount(Button,{
      // 桩   就是一个假的空的 对象替换 数组是假的 不写也可以
      // stubs:['ac-icon'],// 不去渲染icon 只是一个加标签
    });
    // trigger 触发事件  emitted触发一个事件 触发的个数如果是1得话 确实触发
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click').length).to.eq(1)
  })
  it('5.按钮传入position是否正常显示',()=>{ // 测试样式
    const wrapper = shallowMount(Button,{
      attachToDocument:true, // 将组件挂载到浏览器上
      stubs:{
        'ac-icon':Icon // 替换的功能
      },
      slots:{
        default:'ac-ui'
      },
      propsData:{
        iconPosition:'left',
        icon:'edit'
      }
    });
    // 不提供 找真实dom  只能这样选择
    let ele = wrapper.vm.$el.querySelector('span');
    expect(getComputedStyle(ele).order).to.eq('2');
    // 官方API
    wrapper.setProps({iconPosition:'right'}); // 设置props 必须要在下一个事件环去取值
    // 异步渲染。等待下一次渲染之后再去取值
    return wrapper.vm.$nextTick().then(()=>{
      expect(getComputedStyle(ele).order).to.eq('1');
    })
  })
})
