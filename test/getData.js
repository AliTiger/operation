var nodeio = require('node.io');
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
