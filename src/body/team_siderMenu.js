import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
import '../App.css';

class  TeamSiderMenu extends React.Component{
  constructor(){
    super();
    this.state={
      teams:''
    };
  }
  componentWillMount(){
    var myFetchOptions = {
      method:'GET'
    };
    fetch("http://127.0.0.1:3001/team?userId=123",myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({teams:json}));
  }
  render(){
    const {teams}= this.state;
    console.log({teams})
    const teamList = teams.length?
    teams.map((teamItem,index) => (
      <SubMenu key={teamItem.teamId} title={<span><Icon type="appstore" />{teamItem.teamName}</span>}>
      </SubMenu>
    ))
    :
    ''
    ;
    return(
      <Menu mode="vertical"    style={{ height: '100%' }}    >
        {teamList}
      </Menu>
    );
  }
}

export default  TeamSiderMenu;
