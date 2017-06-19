class TeamApi{
  static getAllTeams(userId){
    return fetch('http://localhost:3001/teams?userId='+userId)
            .then(response => {
              return response.json();
            }).catch(error => {
              return error;
            });
  }
}


export default TeamApi;
