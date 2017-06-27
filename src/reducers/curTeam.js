const curTeam = (state={},action) => {
  switch(action.type){
    case 'LOAD_MEMBER_SUCCESS':
      return action.curTeam;
    default:
      return state;
  }
}

export default curTeam;
