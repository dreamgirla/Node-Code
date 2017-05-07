exports.index = function(req, res, next) {
  res.render('index.ejs',{title:"首页"});
};

exports.login = function(req,res){
	res.render('login.ejs');
};

exports.regist = function(req,res){
	res.render('regist.ejs');
};