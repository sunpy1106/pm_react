import React, { Component } from 'react';
import '../App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const {  Sider,Content } = Layout;
import UserTable from './pm_user_table'
class  Team extends React.Component{

  constructor(){
    super();
    this.state={
      teams:'',
      memberList:''
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

  handleClick(eventKey,e){
    console.log("click " + eventKey.key);
    const clickDataSource = this.state.teams.filter(function(el){
      return el.teamId==eventKey.key;
    });
    console.log(clickDataSource[0].teamMember);
    this.setState({memberList:clickDataSource[0].teamMember});

  }
  render(){
    const {teams}= this.state;
    const teamList = teams.length?
    teams.map((teamItem,index) => (
      <SubMenu key={teamItem.teamId} onTitleClick={this.handleClick.bind(this)} title={<span><Icon type="team" />{teamItem.teamName}</span>}>
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
          <Menu mode="vertical"    style={{ height: '100%' }}    >
            {teamList}
          </Menu>
        </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <UserTable memberList={memberList}/>
          </Content>
      </Layout>
    </Content>
  );
  }
}

export default Team;
