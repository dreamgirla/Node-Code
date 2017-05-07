//控制器
var userModel = require('../models/userModel');

exports.regist = function(req,res,next){
	var name = req.body.username;
	var pwd = req.body.password;
	var sex = req.body.sex;

	userModel.save({
        username: name,
        password: pwd,
        sex: sex
    }, function(result){
        if(result.affectedRows > 0){
            res.redirect('/login');
        }
        
    });
	
};

exports.checkUser = function(req,res){
	var name = req.query.username;//get方式查询用req.query,post方式用req.body

	 // console.log(name + '  ~~~');

	userModel.getByName(name,function(rs){
	    // console.log(rs);//返回个数组
         // [ RowDataPacket {
         //    user_id: 38,
         //    username: 'yy',
         //    password: 'yy',
         //    creat_time: Sat May 06 2017 21:25:37 GMT+0800 (中国标准时间),
         //    sex: 'woman' } ]
		if(rs.length > 0){
           res.send('fail');
       }else{
           res.send('success');
       }
    });
};

exports.login = function(req, res){
    var name = req.body.username;
    var pwd = req.body.password;

    userModel.getByNameAndPwd(name, pwd, function(rs){
      // console.log(rs);//返回个数组
       // [ RowDataPacket {
       //   user_id: 1,
       //   username: 'll',
       //   password: 'll',
       //   creat_time: Fri May 05 2017 14:13:07 GMT+0800 (中国标准时间),
       //   sex: 'man' } ]
        if(rs.length > 0){
          //rs[0]查到的值user对象
            req.session.user = rs[0];
            // console.log(rs[0]);
            //跳到首页
            res.redirect('/');
        }else{
           res.send('您未注册，请返回首页注册！');

        }
    });
};


exports.checkLogin = function(req, res){
    //console.log(req.session.user+"1");
    var user = req.session.user;
    if(user){
        res.send('success');
    }else{
        res.send('fail');
    }
};