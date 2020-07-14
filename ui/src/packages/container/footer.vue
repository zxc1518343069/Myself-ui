<template>
  <footer class="ac-footer" :style="height">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'ac-footer',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  }
</script>

<style>
  .ac-footer {

  }
</style>
