var mongo = require('./lib/MyMongo.js').MyMongo;

var db = new mongo('localhost',27017,'operation');

//模拟数据
var day = [80000,70000,68000,50000,47000,39000,20000,10000,28000,32000,47000,59000,60000,70000,88000,90000,87000,79000,60000,57000,48000,32000,27000,19000,22000,33000,46000,51000,64000,74000,82000];

var week = [68000,50000,47000,39000,20000,10000,28000,32000,47000,59000,60000,70000,88000,90000,87000,79000,60000,57000,48000,32000,27000,19000,22000,33000,46000,51000,64000,74000,82000,80000,70000,68000,50000,47000,39000,20000,10000,28000,32000,47000,59000,60000,70000,88000,90000,87000,79000,60000,57000,48000,30000,20000];

var month = [80000,70000,68000,50000,47000,39000,20000,10000,28000,32000,47000,59000];

var dayAver = [];
for(var i=0;i<day.length;i++){
    dayAver[dayAver.length] = parseInt(day[i] / 24);
}
var weekAver = [];
for(var i=0;i<week.length;i++){
    weekAver[weekAver.length] = parseInt(week[i] / 7);
}
var monthAver = [];
for(var i=0;i<month.length;i++){
    monthAver[monthAver.length] = parseInt(month[i] / 31);
}

exports = module.exports = {
	db_name:'operation',
	db:db,
    day:day,
    week:week,
    month:month,
    dayAver:dayAver,
    weekAver:weekAver,
    monthAver:monthAver

};
