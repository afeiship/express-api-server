const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const serverConfig = require('./package.json').serverConfig;

const app = new Koa();
const router = new Router({
  prefix: '/nodeapp/v1'
});

// bussiness middlewares
router.get('/hello_get', async (ctx, next) => {
  const params = ctx.request.body;
  console.log(params);
  ctx.body = 'hello from get response';
});

// bussiness middlewares
router.post('/hello_post', koaBody(), async (ctx, next) => {
  const params = ctx.params;
  console.log(params);
  ctx.body = 'hello from post response';
});

// router middleware:
app.use(router.routes());
app.use(router.allowedMethods());

// start server:
app.listen(serverConfig.port);
