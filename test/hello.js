var config = require('../config.js');                                                                                                                 
var db = config.db;
var col = 'users';

var nodeio = require('node.io');
exports.job = new nodeio.Job({
	input: false,
	run: function () {
		var that = this;
		db.query(col,function( collection ){
			collection.find({name:'lixiaodong'}).toArray(function( err, user ){
				console.log('user ',user);
				that.emit('Hello World!');
			});
		});
	}
});
