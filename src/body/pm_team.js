import React, { Component } from 'react';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router';
import UserTable from './pm_user_table';
const { SubMenu } = Menu;
const {  Sider,Content } = Layout;


class  Team extends React.Component{
  constructor(){
    super();
    this.state={
      teams:'',
      memberList:'',
      userId:''
    };
  }
  componentWillMount(){
    console.log("state");
    console.log(this.props.location.state.userId);
    var userId = this.props.location.state.userId;
    var myFetchOptions = {
      method:'GET'
    };
    fetch("http://127.0.0.1:3001/team?userId="+userId,myFetchOptions)
    .then(response => response.json())
    .then(json => this.setState({teams:json}));
  }

  handleClick(eventKey,e){
    console.log("click " + eventKey.key);
    const clickDataSource = this.state.teams.filter(function(el){
      return el.teamId==eventKey.key;
    });
    console.log(clickDataSource[0].teamMember);
    this.setState({memberList:clickDataSource[0].teamMember});

  }
  handleSubMenuClick(item,key,selectedKeys){
    console.log("click sub menu");
  }
  render(){
    const {teams}= this.state;
    const teamList = teams.length?
    teams.map((teamItem,index) => (
      <SubMenu key={teamItem.teamId}  title={<Link  to={`/team/${teamItem.teamId}`} > <span><Icon type="team" />{teamItem.teamName}</span></Link>}>
      </SubMenu>
    ))
    :
    ''
    ;
    var memberList = this.state.memberList;
    if(memberList == null){
      for(var i in this.state.teams){
          memberList=memberList.concat(this.state.teams[i].teamMember);
      }
      this.setState({memberList:memberList});
    }
    return(
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu mode="vertical"     style={{ height: '100%' }}    >
            {teamList}
          </Menu>
        </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {this.props.children}
          </Content>
      </Layout>
    </Content>
  );
  }
}

export default Team;
