import TeamApi from '../api/teamApi';

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

export function addMemberSuccess(teamId,memberInfo){
  return{
    type:'ADD_MEMBER_SUCCESS',
    memberInfo,
    teamId
  }
}

export function delMemberSuccess(teamId,userId){
  return {
    type:'DELETE_MEMBER_SUCCESS',
    teamId,
    userId
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

export function addSubTeamSuccess(teamId,teamInfo){
  return {
    type:'ADD_SUB_TEAM_SUCCESS',
    teamId,
    teamInfo
  }
}

export function ADD_SUB_TEAM(teamId,teamInfo){
  console.log('add_sub_team');
  return function(dispatch){
    return TeamApi.addSubTeam(teamId,teamInfo).then(response=>{
      console.log(response);
      dispatch(addSubTeamSuccess(teamId,response));
    })
  }
}

export function DELETE_TEAM(teamId,subTeamId){

}

export function ADD_MEMBER(teamId,memberInfo){
  console.log('ADD_MEMBER');
  console.log(teamId);
  console.log(memberInfo);
  return function(dispatch){
    return TeamApi.addMember(teamId,memberInfo).then(response=>{
      console.log(response);
      dispatch(addMemberSuccess(teamId,response));
    })
  }
}

export function DELETE_MEMBER(teamId,userId){
  console.log('deleteMember');
  console.log(teamId);
  console.log(userId);
  return function(dispatch){
    return TeamApi.deleteMember(teamId,userId).then(response =>{
      console.log(response);
      dispatch(delMemberSuccess(teamId,userId));
    }
  ).catch(error=>{
    throw(error);
    })
  }
}
export function UPDATE_MEMBER(teamId,memeber){

}
