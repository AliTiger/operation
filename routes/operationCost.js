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

	var cost = day;
	var output = dayAver;
	var params = {};
	params.title = '投入产出比值';
	params.user = req.session.user;
	params.users = req.session.users;
	params.cost = cost;
	params.output = output;
	
	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);

}

//投入产出比值
exports.inputOutput = function(req, res){
	var input = day;
	var output = dayAver;
	return res.send(200,{input:input,output:output});
}
//推广成本
exports.popularize = function(req, res){
	var active = day;
	var charge = dayAver;
	return res.send(200,{active:active,charge:charge});
}
