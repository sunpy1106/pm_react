class TeamApi{
  static getAllTeams(userId){
    return fetch('http://localhost:3001/teams?userId='+userId)
            .then(response => {
              return response.json();
            }).catch(error => {
              return error;
            });
  }

  static getTeamMembers(teamId){
    const request  = new Request('http://localhost:3001/teamMembers/' + teamId,{
      method:'GET'

    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllUsers(teamId){
    const request  = new Request('http://localhost:3001/users' ,{
      method:'GET'
    });
    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static addMember(teamId,memberInfo){
    const request = new Request('http://localhost:3001/teams/'+teamId, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({persons:memberInfo})
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

  }

  static addSubTeam(teamId,teamInfo){
    const request = new Request('http://localhost:3001/teams/'+teamId, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        teams:[{
        superTeamId:teamId,
        teamName:teamInfo.teamName
      }]}
    )
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

  }
  static deleteMember(teamId,userId){
    const request = new Request('http://localhost:3001/teamMembers/'+teamId, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        _method:'delete',
        _userId:userId
      })
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });

  }

}


export default TeamApi;
