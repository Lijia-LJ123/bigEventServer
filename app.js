// 用于开启服务
const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();
app.listen(3307, () => console.log('大事件接口启动'));

// ------------------------配置应用级别的中间件
app.use(cors()); //解决跨域问题
//获取post请求体
app.use(
  express.urlencoded({
    extended: false,
  })
);

// ------------------------加载路由模块配置成中间件
// app.use('前缀'，require('xxx'))
app.use('/api', require(path.join(__dirname, 'router', 'login')));
app.use('/my/article', require(path.join(__dirname, 'router', 'category')));
app.use('/my/article', require(path.join(__dirname, 'router', 'article')));
app.use('/my', require(path.join(__dirname, 'router', 'user')));
