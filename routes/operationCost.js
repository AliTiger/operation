//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;

	var cost = [45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,84,45,52,54,74,90,84];
	var output = [60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,120,60,80,105,125,108,120];
	var params = {};
	params.title = '回流用户数量';
	params.user = req.session.user;
	params.users = req.session.users;
	params.cost = cost;
	params.output = output;
	
	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);

}
