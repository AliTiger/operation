//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;

	console.log('====page_id',page_id);
	return res.render(page_id+'.ejs',{title:'获取用户',user:req.session.user,users:req.session.users});
}
