//inheritance
var Double = require('./double').job;

exports.job = Double.extend({
	run:function (num ){
			Double.run.call(this, num * 2 );
			//same as this.emit( num * 4 )
	}
});
