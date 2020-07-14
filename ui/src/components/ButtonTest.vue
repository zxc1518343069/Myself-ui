<template>
  <div>
    <h1>按钮</h1>
    <ac-button>默认按钮</ac-button>
    <ac-button type="success">成功按钮</ac-button>
    <ac-button type="danger">危险按钮</ac-button>
    <ac-button type="primary">主要按钮</ac-button>
    <ac-button type="info">信息按钮</ac-button>
    <h2>带图标的</h2>
    <ac-button type="success" icon="add1">成功按钮</ac-button>
    <ac-button type="primary" icon="add1"></ac-button>
    <ac-button type="primary" icon="add1" iconPosition="right">测试按钮</ac-button>
    <ac-button type="info">信息按钮</ac-button>
    <ac-icon icon="add1"></ac-icon>
    <h2>加载按钮</h2>
    <ac-button type="primary" loading>加载</ac-button>
    <ac-button type="success" loading>加载</ac-button>
    <ac-button type="info" loading>加载</ac-button>
    <ac-button type="danger" loading>加载</ac-button>
    <ac-button type="waring" loading>加载</ac-button>
    <ac-button loading>加载</ac-button>
    <h1>点击事件</h1>
    <ac-button type="success" @click="fn" :loading="loading">加载</ac-button>
    <h2>按钮组</h2>
    <ac-button-group>
      <ac-button type="primary" icon="zuo">上一页</ac-button>
      <ac-button type="primary" icon="you" icon-position="right">下一页</ac-button>
    </ac-button-group>

  </div>
</template>

<script>
  export default {
    name: 'ButtonTest',
    data(){
      return{
        loading:false
      }
    },
    methods:{
      fn(){
        this.loading = !this.loading
        setTimeout(()=>{
          this.loading = false
        },1000)
      }
    }
  }
</script>

<style scoped>

</style>
