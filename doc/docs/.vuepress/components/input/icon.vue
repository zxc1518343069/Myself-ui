<template>
    <div>
        <ac-input v-model="value" type="text" placeholder="请输入内容" prefix-icon="dizhi"></ac-input>
        <ac-input v-model="value" type="text" placeholder="请输入内容" suffix-icon="dizhi"></ac-input>
    </div>
</template>

<script>
  export default {
    name: 'icon',
    data() {
      return {
        value: ''
      }
    }
  }
</script>
