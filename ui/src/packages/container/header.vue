<template>
  <header class="ac-header" :style="height">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'ac-header',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  }
</script>

<style lang="scss">
  .ac-header {

  }
</style>
