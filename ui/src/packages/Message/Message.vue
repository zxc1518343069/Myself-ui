<template>
  <transition name="ac-message-fade">
    <div v-show="visible"
         class="ac-message"
         :style="messageStyle"
         :class="MesClass"
    >
      {{ message }}
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'Message',
    data() {
      return {
        message: '',
        type: '',
        visible: false,
        duration: 3000,
        verticalOffset: 0
      }
    },
    mounted() {
      if (this.duration > 0)
        setTimeout(()=>{
          this.$destroy() // 销毁当前实例
          // 销毁dom 元素
          this.$el.parentNode.removeChild(this.$el)
          this.close()
        }, this.duration)
    },
    computed: {
      messageStyle() {
        let style = {}
        style.top = this.verticalOffset + 'px'
        style.zIndex = 2000 + this.verticalOffset
        return style
      },
      MesClass() {
        const classes = []
        if (this.type) {
          classes.push(`ac-message-${ this.type }`)
        }
        return classes
      }
    }
  }
</script>
<style lang="scss">
  @import "../../styles/var";

  .ac-message {
    min-width: 380px;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    position: fixed;
    left: 50%;
    background-color: #edf2fc;
    transform: translateX(-50%);
    transition: opacity .3s, transform .4s, top .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    @each $type, $color in (success:$success, error:$danger, warning:$warning, info:$info) {
      &-#{$type} {
        color: $color;
      }
    }
    &-success {
      background-color: #f0f9eb;
      border-color: #e1f3d8
    }
    &-warning {
      background-color: #fdf6ec;
      border-color: #faecd8
    }
    &-error {
      background-color: #fef0f0;
      border-color: #fde2e2
    }
  }

  .ac-message-fade-enter, .ac-message-fade-leave-active {
    opacity: 0;
    transform: translate(-50%, -100%)
  }

</style>
