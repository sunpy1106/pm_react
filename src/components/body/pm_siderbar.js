import React, { Component } from 'react';
import {  Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
const { SubMenu } = Menu;


class  SiderBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      teams:[]
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      teams:nextProps.teams
    })
  }
  renderMenu = (team) => {
        //recursive rendering
        if(team.subcats && team.subcats.length){
          return (
            <SubMenu key={team.teamId} title = {team.teamName} onTitleClick={(e)=>this.props.onMenuClick(e.key)}>
              {team.subcats.map(this.renderMenu)}
            </SubMenu>
          );
        }else{
          return (
            <Menu.Item key={team.teamId}>
              {team.teamName}
            </Menu.Item>
          );
        }

    }

  render(){
    console.log('pm_siderbar');
    let  {teams} = this.props;
    console.log(teams);
    console.log(this.props);
    teams.forEach(e => e.subcats=teams.filter(el=>el.superTeamId==e.teamId));
    teams =teams.filter(e=>e.superTeamId=='');
    return(
      <Menu mode="inline"    style={{ height: '100%' }}  onClick={( e ) => {
        this.props.onMenuClick(e.key);
      }}>
      {teams.map(this.renderMenu)}
      </Menu>
    )
  }
}



export default SiderBar;
