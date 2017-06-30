var db=require('../dbconnection');
var Team={
    getAllTeams:function(callback){
      return db.query("Select * from team",callback);
    },
    getTeamById:function(id,callback){
        return db.query("select * from Team where teamId=?",[id],callback);
    },

    addTeam:function(teamList,callback){
      console.log(teamList);
       var teams = [];
       teamList.teams.forEach(function(team){
         teams.push([Math.floor(Math.random() * 100000).toString(),team.teamName.toString(),team.superTeamId.toString()]);
       })
       console.log(Math.floor(Math.random() * 100000).toString());
       return db.query("Insert into Team(teamId,teamName,superTeamId) values ? ",[teams],callback);
       //return db.query("insert into Team(Id,Title,Status) values(?,?,?)",[Team1.Id,Team1.Title,Team1.Status],callback);
    },
    deleteTeam:function(teamId,callback){
      return db.query("delete from team where teamId =?",[teamId],callback);
    },
    addMember:function(memberList,callback){
      var members =[];
      console.log(memberList);
      memberList.persons.forEach(function(member){
        members.push([member.teamId,member.userId,member.roleId,member.createTime]);
      })
      console.log(`members: ${members}` )
      return db.query("insert into teamMember(teamId,userId,role,createTime) values ?",[members],callback);
    }
};
module.exports=Team;
