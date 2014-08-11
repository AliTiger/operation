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
	var params = {};
	params.title = '回流用户数量';
	params.user = req.session.user;
	params.users = req.session.users;
	params.day = day;
	params.dayAver = dayAver;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}

//次日留存率
exports.remain = function(req, res){
	var option = req.query.option;
	if( option == 'day' ){
		return res.send(200,{day:day});
	}
	if( option == 'three' ){
		var three = day.slice(0,10);
		return res.send(200,{three:three});
	}
	if( option == 'week' ){
		return res.send(200,{week:week});
	}
	if( option == 'month' ){
		return res.send(200,{month:month});
	}
}
