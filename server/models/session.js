var db=require('../dbconnection');
var Session={
    login:function(user,callback){
        return db.query("select * from User where userName=? and password =?",[user.userName,user.password],callback);
    }
};
module.exports=Session;
