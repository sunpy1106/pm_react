var db=require('../dbconnection');
var User={
    getAllUsers:function(callback){
      return db.query("Select * from User",callback);
    },
    getUserById:function(id,callback){
        return db.query("select * from User where userId=?",[id],callback);
    },
    addUser:function(User,callback){
       console.log("inside service");
       console.log(User.userId);
       return db.query("Insert into User(UserId,UserName,userNickName,createTime) values(?,?,?,?)",[User.UserId,User.UserName,User.userNickName,now()],callback);
       //return db.query("insert into User(Id,Title,Status) values(?,?,?)",[User1.Id,User1.Title,User1.Status],callback);
    }
};
module.exports=User;
