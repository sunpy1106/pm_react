import React, { Component } from 'react';
import { Layout, Breadcrumb} from 'antd';
const {  Content} = Layout;
import '../App.css';
import TeamSiderMenu from './team_siderMenu';
const {  Sider } = Layout;
class  Team extends React.Component{
  render(){
    return(
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <TeamSiderMenu />
        </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>

          </Content>
      </Layout>
    </Content>
  );
  }
}

export default Team;
