//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;



	var params = {};
	params.title = '用户信息';
	params.user = req.session.user;
	params.users = req.session.users;
	params.active_user = active_user;
	params.high_active_user = high_active_user;
	
	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}
