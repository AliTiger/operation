//var mongo = require('../lib/MyMongo.js').MyMongo;

//var db = new mongo('localhost',27017,'operation'); 

var config = require('../config.js');

var db = config.db;

var col = 'users';

exports.get = function(req, res){
	var user = req.session.user;
	var users = req.session.users;
	console.log('set power user:',user);
	console.log('set power users:',users);
	return res.render('setPower',{title:'设置用户权限',user:user,users:users});
}
exports.getPower = function(req, res){
	var user = req.query.user;
	db.query(col,function( collection ){
		collection.find({name:user}).toArray(function(err,result){
			console.log('personalPower:',result);
			return res.send(200,{data:result[0]});
		});
	});
}

exports.setPower = function(req, res){
	var user = req.session.user;//root user
	var users = req.session.users;
	var power = req.body.power;
	var tmp_user = req.body.user;//要设置的用户
	console.log('============tmp_user:',tmp_user);
	console.log('============power:',power);
	db.query(col,function( collection ){
		collection.update({name:tmp_user},{$set:{power:power}});
		return res.send(200,{msg:'ok'});
	});
}
