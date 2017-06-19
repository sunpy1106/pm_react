import TeamApi from '../api/teamApi';

export const USER_LOGIN=(userName,password)=>(
  {
    type:'USER_LOGIN',
    user:userName,
    passwd:password
  }
)

export const SHOW_TEAM= (teamId) => (
  {
    type:'SHOW_TEAM',
    teamId
  }
)

export function loadTeamsSuccess(teams){
  return {
    type:'LOAD_TEAMS_SUCCESS',
    teams
  }
}
export function CLICK_NAV  (query,userId){
  return function(dispatch){
      return TeamApi.getAllTeams(userId).then(teams =>{
        dispatch(loadTeamsSuccess(teams));
      }).catch(error => {
        throw(error);
      })
    }

}
