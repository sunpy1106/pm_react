var db=require('../dbconnection');
var teamMember={
    getAllteamMembers:function(callback){
      return db.query("Select * from teamMember",callback);
    },
    getTeamMemberById:function(id,callback){
        return db.query("select p.teamid,p.userid,p.role ,p.createTime ,q.userName,q.userNickName from teamMember p left join user q on p.userid = q.userId where teamId=?",[id],callback);
    },
    addteamMember:function(teamMember,callback){
       console.log("inside service");
       console.log(teamMember.teamId);
       return db.query("Insert into teamMember(teamId,userId,role,createTime) values(?,?,?,?)",[teamMember.teamId,teamMember.userId,teamMember.role,now()],callback);
       //return db.query("insert into teamMember(Id,Title,Status) values(?,?,?)",[teamMember1.Id,teamMember1.Title,teamMember1.Status],callback);
    }
};
module.exports=teamMember;
