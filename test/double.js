var nodeio = require('node.io');

exports.job = new nodeio.Job({
	input:[0,1,2],
	run:function( num ){
		this.emit( num * 2 );
	}
});
