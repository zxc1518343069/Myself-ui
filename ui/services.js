const Koa = require('koa')
const Router = require('@koa/router')
const Multer = require('@koa/multer')

var cors = require('koa2-cors')

const app = new Koa()
app.use(cors())

const router = new Router()
// 上传路径
const upload = Multer({
  dest: 'uploads/'
})
router.post('/upload', upload.fields([{ name: 'avatar', maxCount: 5 }]),
  ctx=>{

    console.log('文件', ctx.files);
    console.log('请求body', ctx.request.body);
    console.log('请求文件', ctx.request.files);
    console.log(ctx.request.files);
    let r = ctx.request.files.avatar.map(item=>({
      url:item.path,
      name:item.originalname
    }))
    ctx.body = r
  }
)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
