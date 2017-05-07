var express = require('express');
var router = express.Router();

/* GET users listing. */
var user = require('../controllers/user.js');


router.post('/regist',user.regist);

router.get('/checkUser',user.checkUser);

router.post('/login', user.login);

router.get('/checkLogin', user.checkLogin);

module.exports = router;
