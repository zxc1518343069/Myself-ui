<template>
  <button class="ac-button" :class="btnClass">
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: 'ac-button',
    props: {
      type: {
        type: String,
        default: '',
        validator(type) {
          console.log(type)
          if (type && !['waring', 'success', 'danger', 'info', 'primary'].includes(type)) {
            console.error('type类型必须是' + ['waring', 'success', 'danger', 'info', 'primary'].join(','))
          }
          return true
        }
      }
    },
    computed: {
      btnClass() {
        const classes = []
        if (this.type) {
          classes.push(`ac-button-${ this.type }`)
        }
        return classes
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/_var.scss";
  @import "../styles/mixin";

  $height: 42px;
  $font-size: 16px;
  $color: #606266;
  $border-color: #dcdfe6;
  $background: #ecf5ff;
  $active-color: #3a8ee6;
  .ac-button {
    border-radius: $border-radius;
    border: 1px solid $border-color;
    height: $height;
    color: $color;
    font-size: $font-size;
    line-height: 1;
    cursor: pointer;
    padding: 12px 20px;
    @include flexSet($dis: inline-flex, $hov: center);
    user-select: none; // 是否可以选中文字
    &:hover, &:focus {
      color: $primary;
      border-color: $border-color;
      background-color: $background;
    }

    &:focus {
      outline: none;
    }

    &:active {
      color: $primary-active;
      border-color: $primary-active;
      background-color: $background;
    }
    @each $type, $color in (primary:$primary,success:$success,danger:$danger,waring:$warning,info:$info){
      &-#{$type}{
        background-color: $color;
        border: 1px solid $color;
        color: #fff;
      }
    }

    @each $type, $color in (primary:$primary-hover,success:$success-hover,danger:$danger-hover,waring:$warning-hover,info:$info-hover){
      &-#{$type}:hover,&-#{$type}:focus{
        background-color: $color;
        border: 1px solid $color;
        color: #fff;
      }
    }

    @each $type, $color in (primary:$primary-active,success:$success-active,danger:$danger-active,waring:$warning-active,info:$info-active){
      &-#{$type}:active{
        background-color: $color;
        border: 1px solid $color;
        color: #fff;
      }
    }
  }
</style>
