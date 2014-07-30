var nodeio = require('node.io');
exports.job = new nodeio.Job({benchmark: true, max: 50}, {
	input: function(start, num, callback) {
			   if(start !== 0) return false; // We only want the input method to run once
			   var self = this;

			   this.getHtml('https://github.com/search?type=Repositories&language=python&q=django&repo=&langOverride=&x=0&y=0&start_value=1', function(err, $) {
				   if (err) self.exit(err);
				   var total_pages = $('.pager_link').last().text;
				   for(var i = 1; i < total_pages; i++) {
					   callback([i]); // The page number will be passed to the run method
				   }
				   callback(null, false);
				   });
		   }, 
	run: function(page_number) {
			 var self = this;
			 this.getHtml('https://github.com/search?type=Repositories&language=python&q=django&repo=&langOverride=&x=0&y=0&start_value=' + page_number, function(err, $) {
				 if (err) {
					 console.log("ERROR", err);
					 self.retry();
				 }
				 else {
					 $('.result').each(function(listing) {
						 var project = {}
						 var title = $('h2 a', listing).fulltext;
						 project.author = title.substring(0, title.indexOf(" / "));
						 project.title = title.substring(title.indexOf(" / ") + 3);
						 project.link = "https://github.com" + $('h2 a', listing).attribs.href; 
						 var language = $('.language', listing).fulltext;
						 project.language = language.substring(1, language.length - 1); // Strip of leading and trailing brackets
						 project.description = $('.description', listing).fulltext
						 self.emit(project)
					 });
				 }
				 });
		 }
});
