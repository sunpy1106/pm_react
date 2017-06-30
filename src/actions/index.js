import TeamApi from '../api/teamApi';


export function loadMemberSuccess(members,curTeam){
  return {
    type:'LOAD_MEMBER_SUCCESS',
    members,
    curTeam
  }
}

export function SHOW_TEAM  (teamId){
  console.log('SHOW_TEAM');
  return function(dispatch){
      return TeamApi.getTeamMembers(teamId).then(members =>{
        dispatch(loadMemberSuccess(members,teamId));
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
  console.log('click_nac');
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
  console.log(teamId);
  console.log(teamInfo);
  return function(dispatch){
    return TeamApi.addSubTeam(teamId,teamInfo).then(response=>{
      console.log(response);
      dispatch(CLICK_NAV('team',''));
    })
  }
}

export function DELETE_TEAM(teamId){
  return function(dispatch){
    return TeamApi.deleteTeam(teamId).then(()=>{
      dispatch(CLICK_NAV('team',''));
    })
  }
}

export function ADD_MEMBER(teamId,memberInfo){
  console.log('ADD_MEMBER');
  console.log(teamId);
  console.log(memberInfo);
  return function(dispatch){
    return TeamApi.addMember(teamId,memberInfo).then(()=>{
      dispatch(SHOW_TEAM(teamId));
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
