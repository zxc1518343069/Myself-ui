<template>
  <div>
    <h1>输入框</h1>
    <!--    <div>-->
    <!--      <ac-input v-model="value" type="text" placeholder="请输入内容"></ac-input>-->
    <!--      <ac-input v-model="value" type="password" placeholder="请输入内容"></ac-input>-->
    <!--      {{ value }}-->
    <!--      <ac-input v-model="value" type="password" placeholder="请输入内容" disabled></ac-input>-->
    <!--      <ac-input v-model="value" type="password" placeholder="请输入内容" clearable></ac-input>-->
    <!--      <ac-input v-model="value" type="password" placeholder="请输入内容" :show-password="true"></ac-input>-->
    <!--      <br>-->
    <!--      <ac-input v-model="value" type="text" placeholder="请输入内容" prefix-icon="dizhi"></ac-input>-->
    <!--      <ac-input v-model="value" type="text" placeholder="请输入内容" suffix-icon="dizhi"></ac-input>-->
    <!--    </div>-->
    <h1>文件上传</h1>
    <!--
      name 输入框提交到后台的名字
      action  提交地址
      :limit 限制提交个数
      :on-exceed  超过提交个数  会执行次方法
      :on-change 上传文件发生状态变化 会触发  选择文件 上传成功等
      :on-success  上传成功时候触发
      :on-error     上传失败时候触发
      :on-progress  上传过程中时候触发
      :before-upload 上传之前触发的函数
      :file-list  上传文件列表
    -->

    <h2>普通上传</h2>
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
    >
      <ac-button icon="shangchuan" type="primary">文件上传</ac-button>


      <div slot="tip">只能上传img/jpg格式。且不能超过500Kb</div>
    </ac-upload>

    <h2>拖拽上传</h2>
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

  </div>

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

<style>

</style>
