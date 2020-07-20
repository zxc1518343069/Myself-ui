<template>
    <div>
      <ac-button @click="show" type="primary">打开消息提示</ac-button>
      <br>
      <ac-button @click="show" >成功</ac-button>
      <ac-button @click="show2">警告</ac-button>
      <ac-button @click="show3">错误</ac-button>
      <ac-button @click="show4">提示</ac-button>
    </div>
</template>
<script>
  import Message from './../packages/Message';
  export default {
    name: 'App',
    methods: {
      show() {
        // this.$message
        Message.success({message:'恭喜你，这是一条成功消息'})
        // Message({type:'success',message: 'world2'})
      },
      show2() {
        // this.$message({type:'waring',message:'警告哦，这是一条警告消息'})
        this.$message.warning({message:'警告哦，这是一条警告消息'})
        // Message.waring({message:'警告哦，这是一条警告消息'})
        // Message({type:'success',message: 'world2'})
      },
      show3() {
        Message.error({message:'错了哦，这是一条错误消息'})
        // Message({type:'success',message: 'world2'})
      },
      show4() {
        Message.info({message:'这是一条消息提示'})
        // Message({type:'success',message: 'world2'})
      },
    },
  }
</script>
<style>

</style>
