const memberList = (state={},action) => {
  switch(action.type){
    case 'LOAD_MEMBER_SUCCESS':
      return action.members;
    case 'DELETE_MEMBER_SUCCESS':
      console.log('delete member ');
      return [...state.filter(user => user.userid !== action.userId)];
    default:
      return state;
  }
}

export default memberList;
