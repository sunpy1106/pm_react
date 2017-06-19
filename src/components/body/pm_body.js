import React from 'react';
import PropTypes from 'prop-types';
import UserTable from './pm_user_table';

class PMBody extends React.Component{
  constructor(props){
    super(props);
    this.state={
      teamList:this.props.teamList,
      curTeam:this.props.curTeam
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({teamList:nextProps.teamList,curTeam:nextProps.curTeam})

  }

  getMember(teamList,teamId){
    console.log('getMember');
    console.table(teamList);
    debugger;
    for( var index in teamList){
        console.log(index);
        var team = teamList[index];
        if(team.teamId == teamId){
          return team;
        }else if(team.hasOwnProperty('children')){
          var childTeam = this.getMember(team.children,teamId);
          if(childTeam!=''){
            return childTeam;

          }

        }
    }
    return '';
  }

  render(){
    const teamId = this.state.curTeam;
    const teamList = this.state.teamList.length!=0?this.getMember(this.state.teamList,teamId):'';
    console.log('teamList');
    console.log(teamList);
    const body = teamList !='' ?
      <UserTable dataSource={teamList.teamMember} />
    :
      ''
    ;

    return (
      <div>
        {body}
      </div>
    )
  }
}

PMBody.PropTypes = {
  teamList:PropTypes.array.isRequired,
  curTeam:PropTypes.string.isRequired
}

export default PMBody;
