//请求都进路由,最好路由和控制分开，路由负责转发，控制器负责处理
var express = require('express');
var router = express.Router();

var welcome = require('../controllers/welcome.js')
/* GET home page. 回车后执行function方法,get跳转页面*/
//知识
router.get('/', welcome.index);

router.get('/login',welcome.login);
//表单提交验证

router.get('/regist',welcome.regist);

module.exports = router;
