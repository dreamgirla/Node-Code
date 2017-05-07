var db = require('./db');

//查询所有商品
exports.getAll = function(callback){
    db.query('select prod.*, img.img_src from t_product prod, t_product_img img where prod.prod_id=img.prod_id', callback);
   // db.query('select * from t_product', callback);
};

exports.getById = function(productId, callback){
	//要查询三张表
    db.query('select * from t_product where prod_id=?', [productId], function(rs){
        db.query('select * from t_product_img where prod_id=?', [productId], function(rs1){
        	//rs[0]是取回来的第一个数组，也就是第一个表查出来的信息数组，rs1是第二个表查出来的数组，给rs[0]添加属性，返回rs[0]是两个表的组合数组
            rs[0].productImg = rs1;
            db.query('select * from t_product_size where prod_id=?', [productId], function(rs2){
                rs[0].productSize = rs2;
                callback(rs);
            });
        });



    });
};