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
	params.title = '用户流失';
	params.user = req.session.user;
	params.users = req.session.users;
	params.day = day;
	params.dayAver = dayAver;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}

//流失人数和流失率
exports.lost = function(req, res){
	var date = req.body.date;
	var servers = req.body.servers;
	var option = req.body.option;//日 周 月
	console.log('====option',option);

	if(option == 'day'){
		return res.send(200,{day:day,dayAver:dayAver});
	}
	if(option == 'week'){
		return res.send(200,{week:week,weekAver:weekAver});
	}
	if(option == 'month'){
		return res.send(200,{month:month,monthAver:monthAver});
	}
}

//等级分布
exports.levelRank = function(req, res){
	var date = req.body.date;
	var servers = req.body.servers;
	var rank = [100000,90000,80000,70000,60000,50000,40000,30000,20000,19000,
		18000,17000,16000,15000,14000,13000,12000,11000,10000,9000,
		8000,7000,6000,5000,4000,3000,2000,1000,1000,1000,
		500,7000,6000,5000,4000,3000,2000,1000,1000,1000];
	return res.send(200,{rank:rank});
}

//任务分布
exports.taskRank = function(req, res){
	var date = req.body.date;
	var servers = req.body.servers;
	var task = [
		{id:'1',taskId:'200001',taskName:'杀死4个怪物',personCount:100000,percent:'10%'},
		{id:'2',taskId:'200001',taskName:'杀死4个怪物',personCount:100000,percent:'10%'},
		{id:'3',taskId:'200001',taskName:'杀死4个怪物',personCount:100000,percent:'10%'},
		{id:'4',taskId:'200001',taskName:'杀死4个怪物',personCount:100000,percent:'10%'},
	];
	return res.send(200,{task:task});
}

//生命周期
exports.lifeCycle = function(req, res){
	var date = req.body.date;
	var servers = req.body.servers;
	var lifeCycle = day;
	return res.send(200,{lifeCycle:lifeCycle});
}
