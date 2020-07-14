import { shallowMount } from '@vue/test-utils';
import Row from '../src/packages/layout/Row';
import Col from '../src/packages/layout/Col';
import { expect } from 'chai'

describe('Row.vue', ()=>{
  it('测试gutter是否可以 ', async function() {
    let wrapper = shallowMount(Row, {
      attachToDocument: true,
      stubs: {
        'ac-col': Col
      },
      slots: {
        default: '<ac-col></ac-col>'
      },
      propsData: {
        gutter: 20
      }
    })
    expect(getComputedStyle(wrapper.vm.$el).marginRight).to.eq('-10px')
    expect(getComputedStyle(wrapper.vm.$el).marginLeft).to.eq('-10px')
    // 渲染完父组件  在渲染子组件
    await wrapper.vm.$nextTick()
    // 获取文档中 id="demo" 的元素：
    let col = wrapper.vm.$el.querySelector('.ac-col')
    expect(getComputedStyle(col).paddingLeft).to.eq('10px')
    expect(getComputedStyle(col).paddingRight).to.eq('10px')
  });
  it('测试gutter是否可以 ', async function() {
    let wrapper = shallowMount(Row, {
      attachToDocument: true,
      stubs: {
        'ac-col': Col
      },
      slots: {
        default: '<ac-col></ac-col>'
      },
      propsData: {
        justify: 'flex-start'
      },
    })
    expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-start')
    wrapper.setProps({justify:'flex-end'})
    await wrapper.vm.$nextTick()
    expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-end')
    // 异步渲染
    //... 剩下的回来补充
  })
})
