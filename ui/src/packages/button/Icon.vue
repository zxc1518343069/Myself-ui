<template>
  <svg class="ac-icon" aria-hidden="true" @click="$emit('click')">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
  import '../../styles/icon.js'

  export default {
    name: 'ac-icon',
    props:{
      icon:{
        type: String,
        require: true
      }
    }
  }
</script>

<style lang="scss">
  .ac-icon {
    width: 25px;
    height:25px;
    vertical-align: middle;
    fill: currentColor;
  }
</style>
