//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;
	var day_lost = [90000,90000,98000,90000,97000,99000,90000,90000,98000,92000,97000,99000,90000,90000,98000,90000,97000,99000,90000,97000,98000,92000,97000,99000,92000,93000,96000,91000,94000,94000,92000];
	var day_lost_ = [90000,90000,98000,90000,97000,99000,90000,90000,98000,92000,97000,99000,90000,90000,98000,90000,97000,99000,90000,97000,98000,92000,97000,99000,92000,93000,96000,91000,94000,94000,92000];
	var params = {};
	params.title = '用户流失';
	params.user = req.session.user;
	params.users = req.session.users;
	params.day_lost = day_lost;
	params.day_lost_ = day_lost_;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',params);
}
