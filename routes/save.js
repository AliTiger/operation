var xlsx = require('node-xlsx');
var fs = require('fs');

var config = require('../config.js'); 
var day = config.day; 
var week = config.week;
var month = config.month;
var dayAver = config.dayAver;
var weekAver = config.weekAver;
var monthAver = config.monthAver;

exports.saveAs = function(req, res){
	var url = req.params.url;
	var option = req.query.option;
	if(url == 'getUserData'){
		var data = [["姓名","性别","年龄"],["李晓东","男","24"]]; 
		var obj = {"worksheets":[{"data":data}]};
		var file = xlsx.build(obj);
		var f = fs.createWriteStream('../data/user.xlsx');
		fs.writeFileSync('../data/user.xlsx', file, 'binary');
	}
}
