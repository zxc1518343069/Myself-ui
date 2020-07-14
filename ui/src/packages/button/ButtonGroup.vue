<template>
  <div class="ac-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ac-button-group',
    mounted() {
      let children = this.$el.children
      // console.log(children)
      for (let i = 0; i < children.length; i++) {
        console.assert(children[i].tagName === 'BUTTON','子元素必须是button')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../styles/mixin";
  @import "../../styles/var";
.ac-button-group{
  @include flexSet($dis:inline-flex);
  button{
    border-radius: 0;
    &:first-child{
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child{
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:not(first-child){
      border-left: none;
    }
  }
}
</style>
