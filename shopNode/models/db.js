//连接池
var mysql = require('mysql');
var pool = mysql.createPool({
	host :'localhost',
	user :'root',
	password : 'root',
	database : 'shop',
	port : '3307'
});

//导出属性
//exports.connection = connection;


//全部导出
exports.query =function (sql,data,callback) {
  pool.getConnection(function (err,conn) {
      if(err){
        console.log(err);
      }else{
          //判断data是不是函数，否则，如果没有data这个参数，有可能data就是callback的值
          //判断后callback就是函数，不是undefined
          if(typeof data == 'function'){
              callback = data;
              data = null;
          }
          conn.query(sql,data,function(qerr,result){
              //释放连接
              conn.release();
              //事件驱动回调
              callback(result);
          });
      }
  });
};