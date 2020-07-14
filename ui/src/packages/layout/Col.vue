<template>
  <div class="ac-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ac-col',
    data(){
      return {
        gutter:0
      }
    },
    props:{
      span:{
        type:Number,
        default:24
      },
      offset:{
        type: Number,
        default: 0
      },
      xs:[Number,Object],
      sm:[Number,Object],
      md:[Number,Object],
      lg:[Number,Object],
      xl:[Number,Object],
    },
    computed:{
      colClass(){
        let classes = []
        classes.push(`ac-col-${this.span}`)
        if (this.offset){
          classes.push(`ac-col-offset-${this.offset}`)
        }
        ['xs','sm','md','lg','xl'].forEach(type =>{
          if (typeof this[type] === 'object'){
            let {span,offset} = this[type]
            span && classes.push(`ac-col-${type}-${span}`) // ac-col-xs-1
            offset && classes.push(`ac-col-${type}-offset-${offset}`) // ac-col-xs-offset-1
          }else {
            //ac-col-xs-1
            this[type] && classes.push(`ac-col-${type}-${this[type]}`)
          }
        })
        return classes
      },
      colStyle(){
        let style={}
        if (this.gutter){
          style = {
            ...style,
            paddingLeft: this.gutter/2 + 'px',
            paddingRight: this.gutter/2 + 'px'
          }
        }
        return style
      }
    }
  }
</script>

<style lang="scss">
/*通过循环24来创造宽度    sass语法*/
@import "./../../styles/_var";
@import "./../../styles/mixin";
  @for $i from 1 through 24{
    .ac-col-#{$i}{
      width: $i/24*100%;
    }
    .ac-col-offset-#{$i}{
      margin-left: $i/24*100%;
    }
  }
@each $key in ('xs','sm','md','lg','xl'){
  @for $i from 1 through 24{
    @include res($key){
      .ac-col-#{$key}-#{$i}{
        width: $i/24*100%;
      }
    }
  }
}


</style>
