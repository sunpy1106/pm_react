const curTeam = (state={},action) => {
  switch(action.type){
    case 'SHOW_TEAM':
      return action.teamId;
    default:
      return state;
  }
}

export default curTeam;
