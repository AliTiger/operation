//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;

	console.log('====page_id',page_id);
	var active = [];
	var params = {};
	params.title = '活跃用户数量';
	params.user = req.session.user;
	params.users = req.session.users;
	if(page_id == '2-1' || page_id == '2-5'){
		active  = [90000,90000,98000,90000,97000,99000,90000,90000,98000,92000,97000,99000,90000,90000,98000,90000,97000,99000,90000,97000,98000,92000,97000,99000,92000,93000,96000,91000,94000,94000,92000];
		params.active = active;

	}
	return res.render(page_id+'.ejs',params);
}
