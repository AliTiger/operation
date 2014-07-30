//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;
	var active_user = [45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,45,52,54,74,90,84,54,74,90,84];
	var high_active_user =  [60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,60,80,105,125,108,120,105,125,108,120];
	var params = {};
	params.title = '回流用户数量';
	params.user = req.session.user;
	params.users = req.session.users;
	params.active_user = active_user;
	params.high_active_user = high_active_user;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}
