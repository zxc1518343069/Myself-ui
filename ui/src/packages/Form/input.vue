<template>
  <div class="ac-input" :class="elInputSuffix">
    <ac-icon :icon="prefixIcon"
             v-if="prefixIcon"
    ></ac-icon>
    <input :type="ShowPassword?(password?'text':'password'):type" :name="name" :placeholder="placeholder"
           :value="value"
           @input="$emit('input',$event.target.value)"
           :disabled="disabled" ref="input"
           @change="$emit('change',$event)"
           @blur="$emit('blur',$event)"
           @focus="$emit('focus',$event)"
    >


    <!--    @mousedown.native.prevent 不会失去焦点-->
    <ac-icon icon="qingkong"
             v-if="clearable && value"
             @click.native="$emit('input','')"
             @mousedown.native.prevent
    ></ac-icon>
    <!--    先失去 再获取焦点-->
    <ac-icon icon="xianshimima"
             v-if="ShowPassword && value"
             @click.native="changeState"
    ></ac-icon>
    <ac-icon :icon="suffixIcon"
             v-if="suffixIcon"
    ></ac-icon>
  </div>

</template>

<script>
  export default {
    name: 'ac-input',
    data() {
      return {
        // 尽量不要直接更改 父组件传过来的值
        password: true
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      name: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: '请输入内容'
      },
      value: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
      ShowPassword: {
        type: Boolean,
        default: false
      },
      prefixIcon: {
        type: String
      },
      suffixIcon: {
        type: String
      }
    },
    computed: {
      elInputSuffix() {
        let classes = []
        if (this.clearable || this.ShowPassword || this.suffixIcon) {
          classes.push('ac-input-suffix-icon')
        }
        if (this.prefixIcon) {
          classes.push('ac-input-prefix-icon')
        }
        return classes
      }
    },
    methods: {
      changeState() {
        this.password = !this.password
        this.$nextTick(()=>{
          this.$refs.input.focus()
        })
      }
    }
  }
</script>

<style lang="scss">
  .ac-input {
    width: 180px;
    display: inline-flex;
    position: relative;

    input {
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      color: #606266;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      width: 100%;

      &:focus {
        outline: none;
        border-color: #409eff;
      }

      &[disabled] {
        cursor: not-allowed;
        background-color: #f5f7fa;
      }
    }
  }

  .ac-input-suffix-icon {
    .ac-icon {
      position: absolute;
      right: 6px;
      top: 7px;
      cursor: pointer;
    }
  }

  .ac-input-prefix-icon {
    input {
      padding-left: 30px;
    }

    .ac-icon {
      position: absolute;
      left: 8px;
      top: 12px;
      cursor: pointer;
      width: 16px;
      height: 16px;
    }
  }
</style>
