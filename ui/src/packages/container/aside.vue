<template>
  <aside class="ac-aside" :style="`width:${width}`">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'ac-aside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  }
</script>
