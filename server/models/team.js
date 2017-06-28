var db=require('../dbconnection');
var Team={
    getAllTeams:function(callback){
      return db.query("Select * from team",callback);
    },
    getTeamById:function(id,callback){
        return db.query("select * from Team where teamId=?",[id],callback);
    },
    addTeam:function(Team,callback){
       console.log("inside service");
       console.log(Team.teamId);
       return db.query("Insert into Team(teamId,teamName,superTeamId,createTime) values(?,?,?,?)",[Team.teamId,Team.TeamName,Team.superTeamId,'now()' ],callback);
       //return db.query("insert into Team(Id,Title,Status) values(?,?,?)",[Team1.Id,Team1.Title,Team1.Status],callback);
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
