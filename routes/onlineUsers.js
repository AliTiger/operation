//用户
var config = require('../config.js'); 
var day = config.day; 

exports.get = function(req, res){
	var page_id = req.params.page_id;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',{title:'获取用户',user:req.session.user,users:req.session.users});
}

//在线用户
exports.userOnline = function(req, res){
	var onlineUser = day.slice(0,24);
	return res.send(200,{onlineUser:onlineUser});
}
