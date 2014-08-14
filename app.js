var express = require('express');
var session = require('express-session');
var http = require('http');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var log4js = require("./lib/logger");

var routes = require('./routes/index');
var getUsers = require('./routes/getUsers');
var activeUsers = require('./routes/activeUsers');
var onlineUsers = require('./routes/onlineUsers');
var remainUsers = require('./routes/remainUsers');
var lostUsers = require('./routes/lostUsers');
var gameIncome = require('./routes/gameIncome');
var operationCost = require('./routes/operationCost');
var userInformation = require('./routes/userInformation');
var platform = require('./routes/platform');
var power = require('./routes/power');
var save = require('./routes/save');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret:'operation',resave:true,saveUninitialized:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(log4js.connectLogger());

app.get('/', routes.index);
//登陆后台
app.get('/login', routes.login);
app.post('/login', routes.login_check);
app.get('/logout', routes.logout);

app.get('/home', routes.homePage);
//设置权限
app.get('/getPower', power.getPower);
app.get('/setPower', power.get);
app.post('/setPower', power.setPower);

//获取运营平台和区服
app.get('/getPlatforms',platform.getPlatforms);
app.get('/getServers',platform.getServers);

//渲染页面
//获取用户
app.get('/getUsers/:page_id',getUsers.get);
//用户活跃
app.get('/activeUsers/:page_id',activeUsers.get);
//用户在线
app.get('/onlineUsers/:page_id',onlineUsers.get);
//用户留存
app.get('/remainUsers/:page_id',remainUsers.get);
//用户流失
app.get('/lostUsers/:page_id',lostUsers.get);
//游戏收入
app.get('/gameIncome/:page_id',gameIncome.get);
//运营成本
app.get('/operationCost/:page_id',operationCost.get);
//用户信息
app.get('/userInformation/:page_id',userInformation.get);

//获取用户点击下载安装注册数量
app.get('/getUserData',getUsers.getData);
//新增实增数
app.get('/userRealAppend',getUsers.userRealAppend);
//活跃用户数量
app.get('/activeUser',activeUsers.activeUsers);
//新增活跃用户数据
app.get('/newActiveUsers',activeUsers.newActiveUsers);
//活跃用户登录次数
app.get('/loginCount',activeUsers.loginCount);
//活跃用户使用时长
app.get('/useLength',activeUsers.useLength);
//活跃用户一次用户数量
app.get('/onceUsers',activeUsers.onceUsers);
//活跃用户高活跃用户数
app.get('/highActiveUsers',activeUsers.highActiveUsers);

//用户在线
app.get('/userOnline',onlineUsers.userOnline);

//用户留存率
app.get('/remainUsers',remainUsers.remain);
app.get('/backUser',remainUsers.backUser);

//用户流失
app.get('/lostUser',lostUsers.lost);
//用户流失等级分布
app.get('/levelRank',lostUsers.levelRank);
//用户流失任务分布
app.get('/taskRank',lostUsers.taskRank);
//平均生命周期
app.get('/lifeCycle',lostUsers.lifeCycle);

//游戏收入
//充值消费金额
app.get('/chargeConsume',gameIncome.chargeConsume);
//用户平均收益
app.get('/averIncome',gameIncome.averIncome);
//充值用户统计
app.get('/chargeCount',gameIncome.chargeCount);
//活跃充值比例
app.get('/activeCharge',gameIncome.activeCharge);
//充值用户流失
app.get('/chargeUserLost',gameIncome.userLost);
//其他相关统计
app.get('/otherCount',gameIncome.otherCount);

//投入产出比
app.get('/inputOutput',operationCost.inputOutput);
//推广成本
app.get('/popularize',operationCost.popularize);

//用户信息
//用户等级分布
app.get('/gradeDistribute',userInformation.gradeDistribute);
//用户等级排名
app.get('/gradeRank',userInformation.gradeRank);
//用户任务分布
app.get('/taskDistribute',userInformation.taskDistribute);
//用户充值排名
app.get('/chargeRank',userInformation.chargeRank);
//用户地图分布
app.get('/map',userInformation.map);
//用户战场次数
app.get('/battlefield',userInformation.battlefield);

//另存为xlsx文件
app.get('/save/:url',save.saveAs);

app.get('/test',routes.test);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var server = http.createServer(app);

server.listen(8090,function(){
	console.log('server is running at localhost:8090');
});
