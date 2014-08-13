var config = require('../config.js');
var logger = require("../lib/logger").logger("index");

var db = config.db;

var col = 'users';



exports.test = function(req, res) {
  res.render('tmp', { title: 'Express',user:req.session.user });
};

exports.index = function(req, res) {
	if(!req.session.login){
		res.render('login', { title: '登陆后台查询系统' });
	}
};

exports.login = function(req, res) {
	logger.info('login ===========');
	res.render('login', { title: '登陆后台查询系统' });
};

exports.logout = function(req, res) {
	req.session.login = false;
	res.render('login', { title: '登陆后台查询系统' });
};

exports.login_check = function(req, res){
	var userName = req.body.userName;
	var password = req.body.password;
	console.log('================',userName,password);

	db.query(col,function(collection){
		collection.find({name:userName,password:password}).toArray(function(err, user){
			console.log('find users:',user);
			if(user.length){
				req.session.login = true;
				req.session.user = user[0];
				res.send(200,{msg:'ok'});
			}else{
				req.session.login = false;
				res.send(400,{msg:'error'});
			}
		});
	});
};

exports.homePage = function(req, res){
	//方便登陆
	req.session.login = true;
	if(!req.session.login){
		return res.render('login', { title: '登陆后台查询系统' });
	} else {
		//到此说明 有该用户 并已经登录到系统
		var tmp_user = req.session.user;
		console.log(req.session.user,'req.session.user');
		var userName = tmp_user.name;
		console.log('=======login userName:',userName);
		db.query(col,function(collection){
			collection.find({name:userName}).toArray(function(err,user){
				//就不再需要判断user.length
				user = user[0];
				console.log('=============user:',user);
				if(user.power[0] == 1 ){
					//获取所有用户 root用户可以手动配置这些用户的权限
					collection.find({}).toArray(function(err,users ){
						req.session.users = users;
						res.setHeader("Set-Cookie", ["user="+user, "users="+users]);
						return res.render('home', { title: '运营后台数据查询系统',user: user,users:users});
					});
				} else {
					req.session.users = [];
					return res.render('home', { title: '运营后台数据查询系统',user: user});
				}
			});

		});
	}
};







