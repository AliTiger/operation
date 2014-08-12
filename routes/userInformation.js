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
	params.title = '用户信息';
	params.user = req.session.user;
	params.users = req.session.users;
	
	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}

//用户等级分布
exports.gradeDistribute = function(req, res){
	var data = [80000,70000,68000,50000,47000,39000,20000,10000,28000,32000,
		47000,59000,60000,70000,88000,90000,87000,79000,60000,57000,
		48000,32000,27000,19000,22000,33000,46000,51000,64000,74000,
		82000,70000,68000,50000,47000,39000,20000,10000,28000,32000];
	return res.send(200,{data:data});
}
//用户等级排名
exports.gradeRank = function(req, res){
	var data = [];
	data = [
		{ rank:1,name:'轩辕射手',grade:100},
		{ rank:1,name:'轩辕射手',grade:100},
		{ rank:1,name:'轩辕射手',grade:100},
		{ rank:1,name:'轩辕射手',grade:100},
		{ rank:1,name:'轩辕射手',grade:100},
		{ rank:1,name:'轩辕射手',grade:100},
		{ rank:1,name:'轩辕射手',grade:100},
	];
	return res.send(200,{data:data});
}

//用户任务分布
exports.taskDistribute = function(req, res){
	var data = [];
	data = [
		{id:1,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
		{id:2,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
		{id:3,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
		{id:4,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
		{id:5,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
		{id:6,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
		{id:7,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
		{id:8,taskId:200001,taskName:'打败4个怪物',people:99,percent:'5%'},
	];
	return res.send(200,{data:data});
}
//用户充值排名
exports.chargeRank = function(req, res){
	var data = [];
	data = [
		{rank:1,name:'轩辕射手',chargeValue:100},
		{rank:2,name:'轩辕射手',chargeValue:100},
		{rank:3,name:'轩辕射手',chargeValue:100},
		{rank:4,name:'轩辕射手',chargeValue:100},
		{rank:5,name:'轩辕射手',chargeValue:100},
		{rank:6,name:'轩辕射手',chargeValue:100},
		{rank:7,name:'轩辕射手',chargeValue:100},
	];
	return res.send(200,{data:data});
}
//地图通关分布
exports.map = function(req, res){
	var data = [];
	data = [
		{id:1,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:2,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:3,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:4,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:5,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:6,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:7,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:8,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
		{id:9,mapId:200001,mapName:'扭曲丛林',people:10000,percent:'9%'},
	];
	return res.send(200,{data:data});
	
}
//日均战场次数
exports.battlefield = function(req, res){
	var data = day.slice(0,20);
	return res.send(200,{data:data});
}
