var productModel = require('../models/productModel');

//查询所有商品的方法
exports.list = function(req, res){
    productModel.getAll(function(rs){
        res.send(rs);//输出在浏览器控制台中，rs是数组，里面是json对象
    });
};

exports.detail = function(req, res){
   // console.log(req.query.productId);得到的是/detail?productId=1这个数字1
    var productId = req.query.productId;
   
    productModel.getById(productId, function(rs){
      //res.send(rs); //rs返回的是个商品信息数组，第一个表的rs是缺东西的，所以嵌套查询，最后得到所有信息，以下为rs输出形式
    //   [{
    //   "prod_id":2,
    //   "prod_name":"蛋糕2",
    //   "prod_price":90,
    //   "prod_desc":"好好吃",

    //   "productImg":[{
    //     "img_id":3,
    //     "img_src":"uploads/3.jpg",
    //     "img_title":null,
    //     "prod_id":2
    //   },
    //   {
    //     "img_id":4,
    //     "img_src":"uploads/4.jpg",
    //     "img_title":null,
    //     "prod_id":2
    //   }], 
    // "productSize":[
    //   {
    //   "size_id":4,
    //   "size_num":8,
    //   "size_price":150,
    //   "prod_id":2
    //   },
    //   {
    //   "size_id":5,
    //   "size_num":4,
    //   "size_price":99,
    //   "prod_id":2
    //   }
    // ]
    // }]

      res.render('productDetail', {product: rs[0]});//rs是数组形式，rs[0]是去掉数组[]，对象形式（大概）

      // productModel.getProductImg(productId, function(rs1){
      //       //res.send(rs1);

      //       rs[0].productImg = rs1;

      //       //res.send(rs);

      //   });
    // res.render('productDetail');
    });
};