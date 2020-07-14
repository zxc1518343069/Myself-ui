<template>
    <div class="ac-progress">
      <div class="bar">
        <div class="bar-outer" :style="`height: ${strokeWidth}px`">
          <div class="bar-inner" :style="barStyle"></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ac-progress',
    props:{
      strokeWidth:{
        type:Number,
        default: 6
      },
      percentage:{
        type: Number,
        default: 0,
        require: true
      },
      color:{
        type: String,
        default:'blue'
      }
    },
    computed:{
      barStyle(){
        const style = {}
        style.width = this.percentage + '%'
        style.backgroundColor = this.color
        return style
      }
    }
  }
</script>

<style lang="scss">
.ac-progress{
  .bar-outer{
    border-radius: 100px;
    background-color: #eee;
    position: relative;
    vertical-align: middle;
  }
  .bar-inner{
    transition: all 0.6s ease;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}
</style>
