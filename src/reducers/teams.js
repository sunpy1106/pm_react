function scan(teamId, memberInfo) {
  return function(obj) {
    return JSON.parse(JSON.stringify(obj, function(key, value) {
      console.log('key and value');
      console.log(key);
      console.log(value);
      if (typeof value === 'object' && value !== null && value.teamId === teamId) {
        console.log('find it');
        console.log(memberInfo);
        return value.teamMember.push(memberInfo);
      } else {
        return value;
      }
    }
  ));}
}

const modifyTeamList = (teamList,teamId,memberInfo)=>{
  for (var i = 0; i < teamList.length; i++) {
    scan(teamId, memberInfo)(teamList[i]);
  }
  return teamList;
}

const updateTeamInfo=(state,action)=>{

  return modifyTeamList(state,action.teamId,action.memberInfo);
}

const teamList = (state={},action) => {

    switch(action.type){
      case 'LOAD_TEAMS_SUCCESS':
        return  Object.assign([],...state,action.teams);
      case 'ADD_MEMBER_SUCCESS':
        console.log('ADD_MEMBER_SUCCESS')
        console.log(state);
        console.log(action);
        return updateTeamInfo(state,action);
      default:
        return state;



    }


}


export default teamList;
