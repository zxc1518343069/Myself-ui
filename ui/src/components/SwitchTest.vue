<template>
    <div>
      <ac-switch v-model="value"></ac-switch>

      <ac-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费"
      >
      </ac-switch>
      <ac-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费"
        active-color="#3a8ee6"
        inactive-color="#ff4949"
      >
      </ac-switch>

      <ac-switch
        v-model="value1"
        active-text="按月付费"
        inactive-text="按年付费"
        disabled
      >
      </ac-switch>
    </div>
</template>

<script>
  export default {
    name: 'SwitchTest',
    data(){
      return {
        value:true,
        value1:true
      }
    },
  }
</script>

<style lang="scss">

</style>
