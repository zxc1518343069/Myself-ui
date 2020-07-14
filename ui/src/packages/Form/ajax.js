export default function ajax(options) {
  // 创建 对象
  const xhr = new XMLHttpRequest()
  const action = options.action

  const fd = new FormData() // H5上传文件API
  fd.append(options.fileName,options.file)
  // console.log(options.fileName,options.file)

  // console.log('文件名'+options.fileName,options.file)

  xhr.onerror = function (err){
    options.onError(err) // 触发错误回调
  }

  // 上传完毕后走这个方法 H5 api
  xhr.onload = function (){
    let text = xhr.response || xhr.responseText
    options.onSuccess(JSON.parse(text))
  }

  xhr.upload.onprogress = function(e){
    if (e.total > 0){
      e.percent = e.loaded/e.total * 100
    }
    options.onProgress(e)
  }

  // 开启清求
  xhr.open('post',action,true)

  // 发送清求
  xhr.send(fd)
  return xhr
}
