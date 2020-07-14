# Upload 上传
通过点击或者拖拽上传文件

## 点击上传

<br>

<demo-block>
:::slot source
<upload-base></upload-base>
:::

`name` 输入框提交到后台的名字<br>
`action`  提交地址<br>
`:limit` 限制提交个数<br>
`:on-exceed`  超过提交个数  会执行次方法<br>
`:on-change` 上传文件发生状态变化 会触发  选择文件 上传成功等<br>
`:on-success`  上传成功时候触发<br>
`:on-error`     上传失败时候触发<br>
`:on-progress`  上传过程中时候触发<br>
`:before-upload` 上传之前触发的函数<br>
`:file-list`  上传文件列表<br>

:::slot highlight
```html
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
```
:::
</demo-block>

## 拖拽上传

<br>

<demo-block>
:::slot source
<upload-drag></upload-drag>
:::

`:drag` 为`true`的时候 会变成拖拽上传。其他不变

:::slot highlight
```html
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
    >
        <ac-button icon="shangchuan" type="primary">文件上传</ac-button>


        <div slot="tip">只能上传img/jpg格式。且不能超过500Kb</div>
    </ac-upload>
</template>

<script>
  // 其他与上面保持一直
</script>
```
:::
</demo-block>
