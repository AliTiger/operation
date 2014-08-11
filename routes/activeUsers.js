//用户
var config = require('../config.js');
var day = config.day;
var week = config.week;
var month = config.month;
var dayAver = config.dayAver;
var weekAver = config.weekAver;
var monthAver = config.monthAver;

exports.get = function(req, res){
	var page_id = req.params.page_id;

	console.log('====page_id',page_id);
	var active = [];
	var params = {};
	params.title = '活跃用户数量';
	params.user = req.session.user;
	params.users = req.session.users;
	params.day = day;
	params.dayAver = dayAver;

	return res.render(page_id+'.ejs',params);
}

exports.activeUsers = function(req, res){
	var option = req.query.option;//日 周 月
	console.log('option--------:',option);

	active = week;

	if( option == 'week' ){
		return res.send(200,{data:week});
	}
	if( option == 'month' ){
		return res.send(200,{data:month});
	}
	if( option == 'active' ){
		return res.send(200,{data:active});
	}
}

//新增活跃用户
exports.newActiveUsers = function(req, res){
	var option = req.query.option;//日 周 月
	console.log('option--------:',option);

	if( option == 'week' ){
		return res.send(200,{data:week});
	}
	if( option == 'month' ){
		return res.send(200,{data:month});
	}
}

//登录游戏次数
exports.loginCount = function(req, res){
	var option = req.query.option;//日 周 月
	console.log('option--------:',option);

	if( option == 'week' ){
		return res.send(200,{week:week,weekAver:weekAver});
	}
	if( option == 'month' ){
		return res.send(200,{month:month,monthAver:monthAver});
	}
}


//使用时长
exports.useLength = function(req, res){
	var option = req.query.option;//日 周 月
	console.log('option--------:',option);

	var dayActive = day;
	var weekActive = week;
	var monthActive = month;
	var dayCharge = day;
	var weekCharge = week;
	var monthCharge = month;

	if( option == 'day' ){
		return res.send(200,{day:day,dayAver:dayAver});
	}
	if( option == 'dayActive' ){
		return res.send(200,{day:day,dayAver:dayAver});
	}
	if( option == 'dayCharge' ){
		return res.send(200,{day:day,dayAver:dayAver});
	}
	if( option == 'week' ){
		return res.send(200,{week:week,weekAver:weekAver});
	}
	if( option == 'weekActive' ){
		return res.send(200,{week:week,weekAver:weekAver});
	}
	if( option == 'weekCharge' ){
		return res.send(200,{week:week,weekAver:weekAver});
	}
	if( option == 'month' ){
		return res.send(200,{month:month,monthAver:monthAver});
	}
	if( option == 'monthActive' ){
		return res.send(200,{month:month,monthAver:monthAver});
	}
	if( option == 'monthCharge' ){
		return res.send(200,{month:month,monthAver:monthAver});
	}
}


//登录游戏次数
exports.onceUsers = function(req, res){
	var option = req.query.option;//日 周 月
	console.log('option--------:',option);

	if( option == 'week' ){
		return res.send(200,{week:week,weekAver:weekAver});
	}
	if( option == 'month' ){
		return res.send(200,{month:month,monthAver:monthAver});
	}
}

//高活跃用户数量
exports.highActiveUsers = function(req, res){
	var option = req.query.option;//日 周 月
	console.log('option--------:',option);

	if( option == 'week' ){
		return res.send(200,{week:week,weekAver:weekAver});
	}
	if( option == 'month' ){
		return res.send(200,{month:month,monthAver:monthAver});
	}
}
