<template>
<!--  @drop.prevent="onDrop" 松手之后   阻止默认行为 防止打开文件
      @dragover.prevent      划过
      @dragleave.prevent      离开
-->
    <div class="ac-upload-drag"
         @drop.prevent="onDrag"
         @dragover.prevent
         @dragleave.prevent
    >
      <ac-icon icon="shangchuan"></ac-icon>
      <span>将文件拖拽到此区域</span>
    </div>
</template>

<script>
  export default {
    name: 'upLoad-drag',
    props:{
      accept:{
        type:String
      }
    },
    methods:{
      onDrag(e){
        if (!this.accept){
          this.$emit('file',e.dataTransfer.files)
        }else {
          // 自己过滤  过滤之后再次发送

          this.$emit('file',e.dataTransfer.files)
        }

      }
    }
  }
</script>

<style lang="scss">
.ac-upload-drag{
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  width: 360px;
  height: 180px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .ac-icon{
    width: 50px;
    height: 70px;
  }
}
</style>
