const teamList = (state={},action) => {

    switch(action.type){
      case 'LOAD_TEAMS_SUCCESS':
        return  Object.assign([],...state,action.teams);
      default:
        return state;



    }


}


export default teamList;
