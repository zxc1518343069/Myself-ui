<template>
  <div class="ac-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'ac-row',
    props:{
      gutter:{
        type:Number,
        default:0
      },
      justify:{
        type: String,
        validator(type){
          if (type && !['start', 'end', 'content', 'space-around', 'space-between'].includes(type)) {
            console.error('type类型必须是' + ['start', 'end', 'content', 'space-around', 'space-between'].join(','))
          }
          return true
        }
      }
    },
    mounted() {
      this.$children.forEach(child=>{
        child.gutter = this.gutter
      })
    },
    computed:{
      rowStyle(){
        let style={}
        if (this.gutter){
          style = {
            ...style,
            marginLeft: -this.gutter/2 + 'px',
            marginRight: -this.gutter/2 + 'px'
          }
        }
        if (this.justify){
          let key = ['start','end'].includes(this.justify)?`flex-${this.justify}`:this.justify
          style = {
            ...style,
            justifyContent:key
          }
        }
        return style
      }
    }
  }
</script>

<style lang="scss">
.ac-row{
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
