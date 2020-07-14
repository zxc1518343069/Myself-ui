<template>
    <ac-button type="success" @click="fn" :loading="loading">加载</ac-button>
</template>

<script>
  export default {
    name: 'click',
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
