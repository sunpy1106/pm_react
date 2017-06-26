import TeamApi from '../api/teamApi';


export function loadMemberSuccess(members){
  return {
    type:'LOAD_MEMBER_SUCCESS',
    members
  }
}

export function SHOW_TEAM  (teamId){
  return function(dispatch){
      return TeamApi.getTeamMembers(teamId).then(members =>{
        dispatch(loadMemberSuccess(members));
      }).catch(error => {
        throw(error);
      })
    }

}
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

export function delMemberSuccess(userId){
  return {
    type:'DELETE_MEMBER_SUCCESS',
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
  return function(dispatch){
    return TeamApi.deleteMember(teamId,userId).then(() =>{
      console.log(`delete user ${userId} in team ${teamId}`);
      dispatch(delMemberSuccess(userId));
    }
  ).catch(error=>{
    throw(error);
    })
  }
}
export function UPDATE_MEMBER(teamId,memeber){

}
