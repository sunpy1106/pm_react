const memberList = (state={},action) => {
  switch(action.type){
    case 'LOAD_MEMBER_SUCCESS':
      return action.members;
    default:
      return state;
  }
}

export default memberList;
