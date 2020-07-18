<template>
  <div class="ac-switch">
    <span v-if="activeText" :class="{checkedText:!checked}">{{ activeText }}</span>
    <label class="ac-label" :style="labelStyle">
      <input type="checkbox" :checked="checked" @click="changCheck" :disabled="disabled">
      <span></span>
    </label>
    <span v-if="inactiveText" :class="{checkedText:checked}">{{ inactiveText }}</span>
  </div>
</template>

<script>
  export default {
    name: 'ac-switch',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      activeText: String,
      inactiveText: String,
      activeColor:{
        type: String,
        default:'rgb(19, 206, 102)'
      },
      inactiveColor: String,
      disabled:{
        type: Boolean,
        default:false
      }
    },
    data() {
      return {
        checked: this.value
      }
    },
    methods: {
      changCheck() {
        this.checked = !this.checked
        this.$emit('input', this.checked)
      }
    },
    computed:{
      labelStyle(){
        let style = {}
        if (this.checked){
          style.backgroundColor = this.activeColor
        }else {
          style.backgroundColor = this.inactiveColor
        }
        if (this.disabled){
          style.cursor = 'not-allowed'
          style.opacity = 0.6
        }
        return style
      }
    }
  }
</script>

<style lang="scss">
  .ac-label {
    width: 40px;
    height: 20px;
    border-radius: 30px;
    overflow: hidden;
    vertical-align: middle;
    position: relative;
    display: inline-block;
    background: #ccc;
    box-shadow: 0 0 1px #36a6d4;

    input {
      visibility: hidden;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
      background: #fff;
      width: 50%;
      height: 100%;
      transition: all linear 0.2s;
    }

    input:checked + span {
      transform: translateX(100%);
    }
  }
  .checkedText {
    color: #3a8ee6;
  }

</style>
