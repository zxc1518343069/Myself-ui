<template>
    <ac-input v-model="value" type="text" placeholder="请输入内容"></ac-input>
</template>

<script>
  export default {
    name: 'base',
    data(){
      return{
        value:''
      }
    }
  }
</script>
