<template>
    <ac-input v-model="value" type="password" placeholder="请输入内容" disabled></ac-input>
</template>

<script>
  export default {
    name: 'disable',
    data(){
      return{
        value:''
      }
    },
  }
</script>

