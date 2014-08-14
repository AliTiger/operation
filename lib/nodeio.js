var nodeio = require('node.io');

var create = function( url ){
	var option = {
		input:false,
		run: function () {
			this.get(url, function(err, data, headers) {
				console.log(headers);
				console.log(data);
			}); 
		}
	};
	return option;
}

exports.job = new nodeio.Job({
	input: false,
	run: function () {
		var url = 'localhost:8090/getUserData';
		this.get(url, function(err, data, headers) {
			console.log(headers);
			console.log(data);
		}); 
	}
});
