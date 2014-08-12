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

	var ARPPU = day;
	ARPU = dayAver;
	var params = {};
	params.title = '用户流失';
	params.user = req.session.user;
	params.users = req.session.users;
	params.ARPPU = ARPPU;
	params.ARPU= ARPU;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}

//用户充值消费金额
exports.chargeConsume = function(req, res){
	var option = req.query.option;
	//每天曲线
	if( option == 'day_line'){
		return res.send(200,{charge:day,consume:dayAver});
	}
	//每天数据
	if( option == 'day_data'){
		var data = [
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',g:'1000/900',total:'1000/900'}
		];
		return res.send(200,{data:data});
	}
	//每月曲线
	if( option == 'month_line'){
		return res.send(200,{charge:month,consume:monthAver});
	}
	//每月数据
	if( option == 'month_data'){
		var data = [
			{server:'1区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'2区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'3区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'4区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'5区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'6区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'7区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'8区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'},
			{server:'9区力拔山河',a:'1000/900',b:'1000/900',c:'1000/900',d:'1000/900',e:'1000/900',f:'1000/900',total:'1000/900'}
		];
		return res.send(200,{data:data});
	}
}
//充值用户统计
exports.chargeCount = function(req, res){
	var option = req.query.option;
	var data1 = month;
	var data2 = monthAver;
	//充值用户
	if(option == 'chargeUser'){
		return res.send(200,{data1:data1,data2:data2});
	}
	//付费转化
	if(option == 'convert'){
		return res.send(200,{data1:data1});
	}
	//月均充值
	if(option == 'monthCharge'){
		return res.send(200,{data1:data1});
	}
	//忠实付费
	if(option == 'loyal'){
		return res.send(200,{data1:data1});
	}
	//高效用户
	if(option == 'effective'){
		return res.send(200,{data1:data1});
	}
	//首次付费率
	if(option == 'first'){
		data1 = day;
		return res.send(200,{data1:data1});
	}

}

//用户平均收益
exports.averIncome = function(req, res){
	var ARPPU = month;
	var ARPU= monthAver;
	return res.send(200,{ARPPU:ARPPU,ARPU:ARPU});

}

//活跃充值比例
exports.activeCharge = function(req, res){
	var option = req.query.option;
	//日活跃用户充值人数
	if(option == 'day'){
		return res.send(200,{data:day});
	}
	//日新增活跃用户充值人数
	if(option == 'dayNew'){
		return res.send(200,{data:dayAver});
	}
	//周活跃用户充值人数
	if(option == 'week'){
		return res.send(200,{data:week});
	}
	//周新增活跃用户充值人数
	if(option == 'weekNew'){
		return res.send(200,{data:weekAver});
	}
	//月活跃用户充值人数
	if(option == 'month'){
		return res.send(200,{data:month});
	}
	//月新增活跃用户充值人数
	if(option == 'monthNew'){
		return res.send(200,{data:monthAver});
	}

}

//充值用户流失
exports.userLost = function(req, res){
	var option = req.query.option;
	//流失用户和回流用户人数
	if(option == 'lostBack'){
		return res.send(200,{data1:month,data2:monthAver});
	}
	//付费用户流失比例
	if(option == 'lostPercent'){
		return res.send(200,{data:monthAver});
	}

}
//其他相关统计
exports.otherCount = function(req, res){
	var option = req.query.option;
	var data = [];
	//首次付费
	if(option == 'firstCharge'){
		data = [
			{id:1,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:2,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:3,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:4,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:5,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:7,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:8,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:9,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:10,pro:'强化装备',subPro:'强化道具',per:'5%'},
			{id:11,pro:'强化装备',subPro:'强化道具',per:'5%'},
		];
		return res.send(200,{data:data});
	}
	//商城
	if(option == 'store'){
		data = [
			{id:1,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:2,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:3,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:4,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:5,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:7,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:8,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:9,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:10,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
			{id:11,propName:'装备强化',firstBuyCount:99,firstBuyValue:9999,firstBuyPer:'5%',totalBuyCount:1000,totalBuyValue:99999,totalBuyPer:'50%',totalBuyValuePer:'5%'},
		];
		return res.send(200,{data:data});
	}
	//排行榜
	if(option == 'ranking'){
		data = [
			{id:1,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:2,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:3,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:4,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:5,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:7,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:8,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:9,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:10,rank:5,playerName:'轩辕射手',chargeValue:99},
			{id:11,rank:5,playerName:'轩辕射手',chargeValue:99},
		];
		return res.send(200,{data:data});
	}
	//充值等级
	if(option == 'chargeGrade'){
		data = [
			{id:1,grade:22,chargeCount:8888,per:'8%'},
			{id:2,grade:22,chargeCount:8888,per:'8%'},
			{id:3,grade:22,chargeCount:8888,per:'8%'},
			{id:4,grade:22,chargeCount:8888,per:'8%'},
			{id:5,grade:22,chargeCount:8888,per:'8%'},
			{id:7,grade:22,chargeCount:8888,per:'8%'},
			{id:8,grade:22,chargeCount:8888,per:'8%'},
			{id:9,grade:22,chargeCount:8888,per:'8%'},
			{id:10,grade:22,chargeCount:8888,per:'8%'},
			{id:11,grade:22,chargeCount:8888,per:'8%'},
		];
		return res.send(200,{data:data});
	}
	//付费区间
	if(option == 'chargeInterval'){
		data = [
			{id:1,interval:500,per:'5%'},
			{id:2,interval:500,per:'5%'},
			{id:3,interval:500,per:'5%'},
			{id:4,interval:500,per:'5%'},
			{id:5,interval:500,per:'5%'},
			{id:7,interval:500,per:'5%'},
			{id:8,interval:500,per:'5%'},
			{id:9,interval:500,per:'5%'},
			{id:10,interval:500,per:'5%'},
			{id:11,interval:500,per:'5%'},
		];
		return res.send(200,{data:data});
	}

}
