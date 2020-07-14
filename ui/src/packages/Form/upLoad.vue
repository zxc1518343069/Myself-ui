<template>
  <div class="ac-upload">
    <upLoadDrag v-if="drag" :accpet="accept" @file="uploadFiles">

    </upLoadDrag>
    <template v-else>
      <!--    如果不加样式 则点击外面也会触发事件-->
      <div @click="handleClick" class="ac-upload-btn">
        <slot></slot>
        <!--      https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file 参考-->
        <input class="input" type="file" :accept="accept" :multiple="multiple" :name=name
               ref="input" @change="handleChange">
      </div>
    </template>
    <div>
      <slot name="tip"></slot>
    </div>
    <ul>
      <li v-for="(file,index) in files" :key="files.uid">
        <div class="list-item">
          <ac-icon icon="file"></ac-icon>
          {{ file.name }}
          <ac-progress v-if="file.status === 'uploading'" :percentage="file.percentage"></ac-progress>
          <ac-icon icon="cuowu" @click.native="confirmDel(index)"></ac-icon>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  import upLoadDrag from './upLoad-drag'
  import ajax from './ajax'

  export default {
    name: 'ac-upload',
    props: {
      name: {
        type: String,
        default: 'file'
      },
      action: {
        type: String,
        require: true
      },
      limit: Number,
      fileList: {
        type: Array,
        default: ()=>[]
      },
      accept: String,
      multiple: Boolean,
      onExceed: Function,
      onChange: Function,
      onSuccess: Function,
      onError: Function,
      onProgress: Function,
      beforeUpload: Function,
      httpRequest: {  // 提供上传方法 默认ajax
        type: Function,
        default: ajax
      },
      drag: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        tempIndex: 0,
        files: [],
        reqs: {}
      }
    },
    components: {
      upLoadDrag
    },
    watch: { // 监控 当传入得时候 把用户原来得文件也放到files里面 并且格式化
      fileList: {
        immediate: true,
        handler(fileList) {
          this.files = fileList.map(item=>{
            item.uid = Date.now() + this.tempIndex++
            item.status = 'success'
            return item
          })
        }
      }
    },
    methods: {
      handleClick() {
        console.log(1)
        // 点击前先清空 防止多次点击
        this.$refs.input.value = ''
        this.$refs.input.click()
      },
      handleChange(e) {
        // console.log(e) 从中 target 可以找到
        const files = e.target.files
        console.log(files)
        this.uploadFiles(files)
      },
      // 格式化
      handleFormat(rawFile) {
        rawFile.uid = Math.random() + this.tempIndex++
        let file = { // 格式化信息
          uid: rawFile.uid,  //id
          status: 'ready',   // 状态
          name: rawFile.name, //  名字
          raw: rawFile, //   文件
          size: rawFile.size,
          percentage: 0 //上传进度
        }
        // 把当前用户 上传得文件放到列表中 一会要 展示出来
        this.files.push(file)
        // 接下来 通知文件变化
        this.onChange && this.onChange(file)
      },
      upload(file) {
        // 开始上传
        // 如果没有限制 直接上传 有限制得话 要进行判断
        if (!this.beforeUpload) {
          console.log('上传')
          // 直接上传
          return this.post(file)
        }
        // 把文件传给函数进行校验 获取结果
        let result = this.beforeUpload(file)
        console.log(result)
        if (result) {  // 返回true 才有意义
          // 直接上传
          return this.post(file)
        }
      },
      uploadFiles(files) {
        // 判断上传个数
        if (this.limit && this.fileList.length + files.length > this.limit) {
          return this.onExceed && this.onExceed(files, this.fileList)
        }
        [...files].forEach(file=>{
          // 格式化文件  同一文件多次上传
          this.handleFormat(file)
          this.upload(file)
        })
      },
      getFile(rawFile) {
        return this.files.find(file=>file.uid === rawFile.uid)
      },
      handleProgress(ev, rawFile) {
        let file = this.getFile(rawFile)
        file.status = 'uploading'
        file.percentage = ev.percent || 0
        this.onProgress(ev, rawFile) // 触发用户定义
      },
      handleSuccess(res, rawFile) {
        let file = this.getFile(rawFile)
        file.status = 'success'
        this.onSuccess(res, rawFile)
        this.onChange(file)
      },
      handleError(err, rawFile) {
        let file = this.getFile(rawFile)
        file.status = 'fail'
        this.onError(err, rawFile)
        this.onChange(file)
        // 移除文件
        delete this.reqs[rawFile.uid]
      },
      post(file) {
        // 上传逻辑 调用上传方法
        // 整合一下参数  上传需要传递参数
        const uid = file.uid
        // 配置项
        const options = {
          file: file,
          fileName: this.name, // 传入得名字
          action: this.action,
          onProgress: ev=>{
            // 处理上传中得过程
            console.log('上传中', ev)
            this.handleProgress(ev, file)
          },
          onSuccess: res=>{
            // 处理上传成功后
            console.log('上传成功', res)
            this.handleSuccess(res, file)
          },
          onError: err=>{
            // 处理上传失败后
            console.log('上传失败', err)
            this.handleError(err, file)
          }
        }
        console.log(options)
        let req = this.httpRequest(options)
        // 把每一个ajax 存起来  可以取消清求
        this.reqs[uid] = req //
        //  判断结果  如果返回得是一个promise
        if (req && req.then) {
          req.then(options.onSuccess, options.onError)
        }
      },
      confirmDel(index){
        let res = confirm('确认删除吗')
        console.log(this.files[index])

        if (res){
          this.files.pop(index)
        }
      }
    }
  }
</script>

<style lang="scss">
  .ac-upload {
    .ac-upload-btn {
      display: inline-block;
    }

    .input {
      display: none;
    }
  }
</style>
