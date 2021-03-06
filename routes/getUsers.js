//用户
var logger = require('../lib/logger').logger('gerUsers');
var LRU = require('lru-cache');
var config = require('../config.js');

var db = config.db;
var col = 'users';
var max = 1024;
var maxAge = 1000*60*60;
var option = {max:max,maxAge:maxAge};
var usersData = LRU(option); 

exports.get = function(req, res){
	var page_id = req.params.page_id;

	console.log('====page_id',page_id);
	var params = {
		title:'',
		user:req.session.user,
		users:req.session.users
	};
	if( page_id == '1-1'){
		var click    = [90000,90000,98000,90000,97000,99000,90000,90000,98000,92000,97000,99000,90000,90000,98000,90000,97000,99000,90000,97000,98000,92000,97000,99000,92000,93000,96000,91000,94000,94000,92000],
		download = [89000,80000,80000,88000,80000,87000,89000,88000,80000,87000,84000,80000,89000,81000,80000,88000,81000,87000,89000,88000,83000,87000,84000,84000,89000,80000,83000,88000,80000,87000,89000],
		install  = [78000,70000,77000,79000,78000,70000,77000,79000,70000,73000,70000,70000,78000,70000,77000,79000,78000,70000,77000,89000,80000,83000,80000,70000,78000,90000,87000,89000,78000,90000,87000],
		register = [70000,78000,90000,87000,89000,78000,78000,90000,87000,76000,78000,90000,70000,78000,90000,87000,89000,78000,78000,90000,87000,76000,78000,90000,70000,78000,90000,87000,89000,78000,78000];
		usersData.set('click',click);
		usersData.set('download',download);
		usersData.set('install',install);
		usersData.set('register',register);
		params.click = click;
		params.download = download;
		params.install = install;
		params.register = register;

	}
	if( page_id == '1-2'){
		var click = [90000,90000,98000,90000,97000,99000,90000,90000,98000,92000,97000,99000,90000,90000,98000,90000,97000,99000,90000,97000,98000,92000,97000,99000,92000,93000,96000,91000,94000,94000,92000],
		download = [89000,80000,80000,88000,80000,87000,89000,88000,80000,87000,84000,80000,89000,81000,80000,88000,81000,87000,89000,88000,83000,87000,84000,84000,89000,80000,83000,88000,80000,87000,89000],
		install  = [78000,70000,77000,79000,78000,70000,77000,79000,70000,73000,70000,70000,78000,70000,77000,79000,78000,70000,77000,89000,80000,83000,80000,70000,78000,90000,87000,89000,78000,90000,87000],
		register = [70000,78000,90000,87000,89000,78000,78000,90000,87000,76000,78000,90000,70000,78000,90000,87000,89000,78000,78000,90000,87000,76000,78000,90000,70000,78000,90000,87000,89000,78000,78000];
		params.click = click;
		params.download = download;
		params.install = install;
		params.register = register;

	}
	return res.render(page_id+'.ejs',params);
}
//获取点击下载安装注册人数
exports.getData = function(req, res){
	var servers = req.body.servers;
	console.log('servers:',servers);
	var date = req.body.date;
	console.log('date:',date);
	var click = usersData.get('click'),
	download = usersData.get('download'),
	install = usersData.get('install'),
	register = usersData.get('register');
	return res.send(200,{click:click,download:download,install:install,register:register});
}

//新增实增数及转化率
exports.userRealAppend = function(req, res){
		var newUser = [78000,70000,77000,79000,78000,70000,77000,79000,70000,73000,70000,70000,78000,70000,77000,79000,78000,70000,77000,89000,80000,83000,80000,70000,78000,90000,87000,89000,78000,90000,87000],
		realNewUser = [70000,78000,90000,87000,89000,78000,78000,90000,87000,76000,78000,90000,70000,78000,90000,87000,89000,78000,78000,90000,87000,76000,78000,90000,70000,78000,90000,87000,89000,78000,78000];
		return res.send(200,{newUser:newUser,realNewUser:realNewUser});
}
