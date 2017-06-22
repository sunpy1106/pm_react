function scan_add_member(teamId, memberInfo) {
  return function(obj) {
    return JSON.parse(JSON.stringify(obj, function(key, value) {
      if (typeof value === 'object' && value !== null && value.teamId === teamId) {
        return value.teamMember.push(memberInfo);
      } else {
        return value;
      }
    }
  ));}
}


const addMember = (teamList,teamId,memberInfo)=>{
  var tarTeamList = Object.assign([],teamList);
  for (var i = 0; i < tarTeamList.length; i++) {
    scan_add_member(teamId, memberInfo)(tarTeamList[i]);
  }
  return tarTeamList;
}

function scan_delete_member(teamId, userId) {
  debugger;
  console.log('scan_delete_member');
  return function(obj) {
    return JSON.parse(JSON.stringify(obj, function(key, value) {
      if (typeof value === 'object' && value !== null && value.teamId === teamId) {
        return value.teamMember.filter(function(el){return el.userId != userId; });
      } else {
        return value;
      }
    }
  ));}
}

const deleteMember = (teamList,teamId,userId)=>{

  var tarTeamList = Object.assign([],teamList);
  console.log(tarTeamList);
  console.log('tarTeamList');
  for (var i = 0; i < tarTeamList.length; i++) {
    scan_delete_member(teamId, userId)(tarTeamList[i]);
  }
  console.log('after delete');
  console.log(tarTeamList);
  return tarTeamList;
}

function scan_add_team(teamId, teamInfo) {
  return function(obj) {
    return JSON.parse(JSON.stringify(obj, function(key, value) {
      if (typeof value === 'object' && value !== null && value.teamId === teamId) {
        console.log(value);
        return value.children.push(teamInfo);
      } else {
        return value;
      }
    }
  ));}
}


const addSubTeam=(teamList,teamId,teamInfo)=>{
  debugger;
  var tarTeamList = Object.assign([],teamList);
  for(var i = 0;i<tarTeamList.length;i++){
    scan_add_team(teamId,teamInfo)(tarTeamList[i]);
  }
  return tarTeamList;
}

const updateTeamInfo=(state,action)=>{
  console.log('updateTeamInfo');
  debugger;
  switch(action.type){
    case 'ADD_MEMBER_SUCCESS':
      return addMember(state,action.teamId,action.memberInfo);
    case 'DELETE_MEMBER_SUCCESS':
      return deleteMember(state,action.teamId,action.userId);
    case 'ADD_SUB_TEAM_SUCCESS':
      return addSubTeam(state,action.teamId,action.teamInfo);
  }

}

const teamList = (state={},action) => {
    switch(action.type){
      case 'LOAD_TEAMS_SUCCESS':
        return  Object.assign([],action.teams);
      case 'ADD_MEMBER_SUCCESS':
        return updateTeamInfo(state,action);
      case 'DELETE_MEMBER_SUCCESS':
        return updateTeamInfo(state,action);
      case 'ADD_SUB_TEAM_SUCCESS':
        return updateTeamInfo(state,action);
      default:
        return state;

    }


}


export default teamList;
