//权限配置
db.powerConfig.insert({a:'getUser',b:'activeUser',c:'onlineUser',d:'stayUser',e:'leftUser',f:'gameIncome',g:'gameCosts',h:'userBehavior'});


//添加用户
db.users.insert({_id:1,name:'lixiaodong',password:'123456',power:[1,2,3,4,5,6,7,8]});
db.users.insert({_id:2,name:'wangzhao',password:'123456',power:[1,2,3,4,5,8]});
db.users.insert({_id:3,name:'zhaoge',password:'123456',power:[4,5,8]});



