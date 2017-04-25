// 基本的服务启动
var koa = require('koa');
var app = new koa();
app.use(function *(){
  this.body = 'Hello World';
});
app.listen(3001);
console.log('服务启动了');
