<template>
    <ac-upload class="upload-demo"
               name="avatar"
               action="http://localhost:3000/upload"
               :limit="3"
               :accept="accept"
               :multiple="true"
               :file-list="fileList"
               :on-exceed="handleExceed"
               :on-change="handleChange"
               :on-success="handleSuccess"
               :on-error="handleError"
               :on-progress="handleProgress"
               :before-upload="beforeUpload"
               :drag="true"
    >
        <ac-button icon="shangchuan" type="primary">文件上传</ac-button>


        <div slot="tip">只能上传img/jpg格式。且不能超过500Kb</div>
    </ac-upload>
</template>

<script>
  export default {
    name: 'FormTest',
    data() {
      return {
        value: '',
        fileList: [
          { url: 'xxx', name: 'ac' },
          { url: 'xxx', name: 'ac2' },
        ],
        accept:'image/jpg'
      }
    },
    methods: {
      handleExceed(files, filesList) {
        console.log('已经超过数量')
        console.log(files, filesList)
      },
      handleChange(file) {
        console.log('打印文件对象')
        console.log(file)
        console.log('change')
      },
      handleSuccess() {

      },
      handleError() {

      },
      handleProgress() {

      },
      beforeUpload(file) {
        // 用户写逻辑
        if (file.size / 1024 > 500) {
          console.log('超出最大限度')
          return false
        } else if (this.accept) {
          if (!file.name.endsWith('.jpg')) {
            console.log('类型错误')
            return false
          }
        }
        return true
      }
    }
  }
</script>
