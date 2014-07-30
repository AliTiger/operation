var nodeio = require('node.io');
var methods = {
	input: false,
	run: function() {
		this.getHtml('http://www.reddit.com/', function(err, $) {


				if (err) this.exit(err);

				var titles = [], scores = [], output = [];


				$('div#siteTable a.title').each(function(a) {
					titles.push(a.text); 
				});


				$('div#siteTable div.score.unvoted').each(function(div) {
					scores.push(div.rawtext); //rawtext doesn't decode entities or trim the text
				});


				if (scores.length != titles.length) {
					this.exit('Title / score mismatch');
				}

				for (var i = 0, len = scores.length; i < len; i++) {

					if (scores[i] == '&bull;') continue;


					this.assert(scores[i]).isInt();


					output.push('['+scores[i]+'] '+titles[i]);
				}

				this.emit(output);
	});
	}
}

exports.job = new nodeio.Job({timeout:10}, methods);
