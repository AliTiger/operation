var config = require('../config.js');

var db = config.db;

var col = 'users';

var nodeio = require('node.io');
exports.job = new nodeio.Job({
	input: false,
	run: function () {
		var url = 'localhost:8090/getUserData';
		this.get(url, function(err, data, headers) {
			console.log('================data:\n',data["click"]);
			db.query(col,function( collection ){
				collection.insert({name:'userData',data:JSON.stringify(data)},{safe:true},function(err){
					console.log('ok');
				});
				collection.find({name:'userData'},{_id:0,data:1}).toArray(function(err,data){
					var data = JSON.parse(data);
					console.log('find data.click:',data.click);
				});
			});
		}); 
	}
});
