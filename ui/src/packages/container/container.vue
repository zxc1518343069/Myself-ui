<template>
  <section class="ac-container" :class="{isVertical}">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'ac-container',
    data() {
      return {
        isVertical: true
      }
    },
    mounted() {
      this.isVertical = this.$children.some(child=>
        ["ac-header", "ac-footer"].includes(child.$options.name)
      )
    }
  }
</script>

<style lang="scss">
  .ac-container {
    display: flex;
    flex-direction: row;
    flex: 1;
  }

  .ac-container.isVertical {
    flex-direction: column;
  }

</style>
