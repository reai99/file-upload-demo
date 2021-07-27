const Koa = require('koa');
const serve = require('koa-static');
const koaBody = require('koa-body');

const app = new Koa();
const router = require('./router')


app.use(koaBody());
app.use(router.routes())
app.use(router.allowedMethods());
app.use(serve(__dirname + '/static'));
app.listen(8888, () => {
  console.log('服务8888端口已经启动了');
});