//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;

	var ARPPU    = [90000,90000,98000,90000,97000,99000,90000,90000,98000,92000,97000,99000],
	ARPU = [70000,78000,90000,87000,89000,78000,78000,90000,87000,76000,78000,90000];
	var params = {};
	params.title = '用户流失';
	params.user = req.session.user;
	params.users = req.session.users;
	params.ARPPU = ARPPU;
	params.ARPU= ARPU;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}
