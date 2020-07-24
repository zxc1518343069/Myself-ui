<template>
  <div class="ac-popover" ref="parent">
    <!--    阻止事件冒泡-->
    <div class="ac-popover-content"
         v-show="show"
         :class="`popover-${this.placement}`"
         :style="position"
         ref="content"
         @click.stop>
      <h3 v-if="title">{{ title }}</h3>
      <slot>{{ content }}</slot>
      <div class="popover"></div>
    </div>
    <div ref="reference">
      <slot name="reference"></slot>
    </div>
  </div>
</template>

<script>
  const on = (element, event, handler)=>{
    element.addEventListener(event, handler, false)
  }
  const off = (element, event, handler)=>{
    element.removeEventListener(event, handler, false)
  }
  export default {
    name: 'ac-popover',
    data() {
      return {
        show: this.value,
        clientWidth: 0,
        offsetTop: 0,
        offsetLeft: 0
      }
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      placement: {
        validator(type) {
          if (!['top', 'bottom', 'left', 'right'].includes(type)) {
            throw new Error('属性必须是' + ['top', 'bottom', 'left', 'right'].join(','))
          }
          return true
        }
      },
      width: {
        type: [String, Number],
        default: '200px'
      },
      content: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      trigger: {
        type: String,
        default: ''
      },
    },
    methods: {
      handleShow() {
        this.show = !this.show
      },
      handleDom(e) {
        if (this.$el.contains(e.target)) {
          return false
        }
        this.show = false
      },
      handleMouseEnter() {
        clearTimeout(this.time)
        this.show = true
      },
      handleMouseLeave() {
        this.time = setTimeout(()=>{
          this.show = false
        }, 200)
      }
    },
    watch: {
      show(value) {
        if (value && this.trigger === 'hover') {

          this.$nextTick(()=>{
            let content = this.$refs.content
            document.body.appendChild(content)
            on(content, 'mouseenter', this.handleMouseEnter)
            on(content, 'mouseleave', this.handleMouseLeave)
          })
        }
      }
    },
    computed: {
      position() {
        let style = {}
        let width
        if (typeof this.width === 'string') {
          width = this.width.split('px')[0]
        } else {
          width = this.width
        }
        if (this.trigger === 'click') {
          if (this.placement === 'bottom' || this.placement === 'top') {
            style.transform = `translate(-${ this.clientWidth / 2 }px,-50%)`
            style.right = `-${ width / 2 }px`
            // console.log(style.right)
          } else {
            style.top = '-21px'
          }
          if (this.placement === 'bottom') {
            style.top = '-100%'
          } else if (this.placement === 'top') {
            style.top = '200%'
          } else if (this.placement === 'left') {
            style.left = '104%'
          } else if (this.placement === 'right') {
            console.log('click'+this.offsetLeft)
            style.left = '-190%'
          }
        } else if (this.trigger === 'hover') {
          if (this.placement === 'bottom' || this.placement === 'top') {
            style.left = `${ this.offsetLeft - width / 2 }px`
            style.transform = `translateX(${ this.clientWidth / 2 }px)`
          } else {
            style.top = `${ this.offsetTop - 21 }px`
          }
          if (this.placement === 'bottom') {
            style.top = `${ this.offsetTop - 73 }px`
          } else if (this.placement === 'top') {
            style.top = `${ this.offsetTop + 49 }px`
          } else if (this.placement === 'left') {
            console.log(width)
            style.left = `${ this.offsetLeft + this.clientWidth + 7 }px`
          } else if (this.placement === 'right') {
            style.left = `${ this.offsetLeft - width - 6 }px`
          }
        }
        return style
      }
    },
    mounted() {
      let reference = this.$slots.reference
      console.log(this.$refs.parent.offsetLeft)
      this.offsetTop = this.$refs.parent.offsetTop
      this.offsetLeft = this.$refs.parent.offsetLeft
      this.clientWidth = this.$refs.reference.clientWidth
      if (reference) {
        // console.log(reference) // 获取dom节点
        this.reference = reference[0].elm
      }
      if (this.trigger === 'hover') {
        on(this.$el, 'mouseenter', this.handleMouseEnter)
        on(this.$el, 'mouseleave', this.handleMouseLeave)
      } else if (this.trigger === 'click') {
        on(this.reference, 'click', this.handleShow)
        on(document, 'click', this.handleDom)
      }
    },
    beforeDestroy() {
      off(this.$el, 'mouseenter', this.handleMouseEnter)
      off(this.$el, 'mouseleave', this.handleMouseLeave)
      off(this.reference, 'click', this.handleShow)
      off(document, 'click', this.handleDom)
    }
  }
</script>

<style lang="scss">
  .ac-popover {
    position: relative;
    display: inline-block;
  }

  .ac-popover-content {
    width: 200px;
    position: absolute;
    padding: 10px;
    top: 0;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: -1px -1px 3px #ccc, 1px 1px 3px #ccc;
    z-index: 2003;

  }

  .popover {
    position: absolute;

    &::after, &::before {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border: 6px solid #ccc;
      position: absolute;
      border-left-color: transparent;
      border-top-color: transparent;
      border-right-color: transparent;
    }

    &::after {
      border-bottom-color: #fff;
      /*https://www.runoob.com/cssref/css3-pr-filter.html*/
      filter: drop-shadow(0 -2px 1px #ccc);
    }
  }

  .popover-bottom {
    .popover {
      left: 50%;
      margin-left: -6px;
      bottom: 0;

      &::after, &::before {
        transform: rotate(180deg);
      }
    }
  }

  .popover-top {
    .popover {
      left: 50%;
      margin-left: -6px;
      top: -12px;
    }
  }

  .popover-left {
    .popover {
      top: 50%;
      margin-left: -6px;
      left: -6px;

      &::after, &::before {
        transform: rotate(-90deg);
      }
    }
  }

  .popover-right {
    .popover {
      top: 50%;
      margin-left: -6px;
      right: 0;

      &::after, &::before {
        transform: rotate(90deg);
      }
    }
  }
</style>
