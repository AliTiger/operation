var LRU = require("lru-cache");

//获取缓存
exports.get = function( name,key){
	var tmp = name.get( key );
	return  tmp;
}

//设置缓存
exports.set = function( name,key,data ){
	name.set(key,data);	
}

//清空缓存
exports.del = function( name,key ){
	name.del(key);	
}
