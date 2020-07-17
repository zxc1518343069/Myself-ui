<template>
  <div>
    <ac-date-pick v-model="value"></ac-date-pick>
  </div>
</template>

<script>
  export default {
    name: 'DatePickTest',
    data() {
      return {
        value: ''
      }
    }
  }
</script>

<style lang="scss">

</style>
