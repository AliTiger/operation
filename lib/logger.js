var log4js = require("log4js");
//log4js的输出级别6个: trace, debug, info, warn, error, fatal
log4js.configure({
    appenders : [
        { type : "console" } ,
        { type : "file",
          filename : "logs/access.log",
          maxLogSize : 1024*1024*10,
          backups : 3,
          category : "normal"
        }
    ],
    replaceConsole : true
});

exports.connectLogger = function() {
    //var log_format = ':req[X-Forwarded-For] - [:date] ":method :url" :status :response-timems ":referrer" ":user-agent"';
    var log_format = '":method :url" :status :response-timems';
	var logger = log4js.getLogger('http');
	logger.setLevel('INFO');
	return log4js.connectLogger(logger, {level:log4js.levels.INFO, format:log_format});
};

exports.logger = function(name) {
	var logger = log4js.getLogger(name);
	logger.setLevel('INFO');
	return logger;
};


