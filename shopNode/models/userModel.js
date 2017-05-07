//负责处理数据库数据  ./本目录
var db = require('./db');

//接收user的对象，人的信息，有个回调函数
exports.save = function(user, callback){
    db.query("insert into t_user(username, password, sex) values('"+user.username+"', '"+user.password+"', '"+user.sex+"')", callback);
};

exports.getByName = function(name, callback){
    db.query('select * from t_user where username=?',[name], callback);
};

exports.getByNameAndPwd = function(name, pwd, callback){
    db.query('select * from t_user where username=? and password=?',[name, pwd], callback);
};