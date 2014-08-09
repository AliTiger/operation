//用户

exports.get = function(req, res){
	var page_id = req.params.page_id;

	console.log('====page_id',page_id);
	var active = [];
	var params = {};
	params.title = '活跃用户数量';
	params.user = req.session.user;
	params.users = req.session.users;
	active  = [90000,90000,98000,90000,97000,99000,90000,90000,98000,92000,97000,99000,90000,90000,98000,90000,97000,99000,90000,97000,98000,92000,97000,99000,92000,93000,96000,91000,94000,94000,92000];
	params.active = active;

	return res.render(page_id+'.ejs',params);
}

exports.getData = function(req, res){
	var option = req.query.option;//日 周 月
	console.log('option--------:',option);

	week = [80000,70000,68000,50000,47000,39000,20000,10000,28000,32000,47000,59000,60000,70000,88000,90000,87000,79000,60000,57000,48000,32000,27000,19000,22000,33000,46000,51000,64000,74000,82000];
	month = [80000,70000,68000,50000,47000,39000,20000,10000,28000,32000,47000,59000,60000,70000,88000,90000,87000,79000,60000,57000,48000,32000,27000,19000,22000,33000,46000,51000,64000,74000,82000];
	for(var i=0;i<month.length;i++){
		month[i] += 10000;
	}

	if( option == 'week' ){
		return res.send(200,{data:week});
	}
	if( option == 'month' ){
		return res.send(200,{data:month});
	}
}
