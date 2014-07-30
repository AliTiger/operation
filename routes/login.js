/* GET home page. */
exports.render = function(req, res) {
  res.render('login', { title: '登陆后台查询系统' });
};

exports.login = function(req, res){
	var userName = req.body.userName;
	var password = req.body.password;
	console.log(userName,password);
	if(userName=='example' && password=='example'){
		return res.render('index',{title:'登陆成功'});
	}else{
		return res.send(400,{msg:'error'});
	}
};
