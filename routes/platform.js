var config = require('../config.js');
var db = config.db;
var col = 'platform';

var LRU = require('lru-cache');

var max = 1024;
var maxAge = 1000*60*60;
var option = {max:max,maxAge:maxAge};
var cachePlatforms = LRU(option); 
var cacheServers = LRU(option); 

//获取平台
exports.getPlatforms = function(req, res){
	var platforms = cachePlatforms.get('platform');
	if ( platforms ){
		//缓存中存在
		return res.send(200,{platforms:platforms});
	} else {
		db.query(col,function( collection ){
			collection.find({},{_id:0,name:1}).toArray(function(err,platforms){
				console.log('platforms:',platforms);
				cachePlatforms.set('platform',platforms);
				return res.send(200,{platforms:platforms});
			});
		});
	}

}


//@name 平台名称
exports.getServers = function(req, res){
	var name = req.query.name;
	console.log('name:',name);
	var server = cacheServers.get(name);
	if ( server ){
		console.log('01010101010101');
		//缓存中存在
		return res.send(200,{servers:servers});
	} else {
		console.log('10101010101010');
		db.query(col,function( collection ){
			collection.find({name:name},{_id:0,name:1,server:1}).toArray(function(err,servers){
			cacheServers.set(name,servers);
				return res.send(200,{servers:servers});
			});
		});
	}
}


