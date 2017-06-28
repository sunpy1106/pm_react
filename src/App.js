import React, { Component } from 'react';
import './App.css';
import ShowNav from './containers/show_nav';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import ShowSiderBar from './containers/show_sider';
import ShowBody from './containers/show_body';
const { SubMenu } = Menu;
const { Header, Content, Footer,Sider } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header  className="header">
          <ShowNav />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
          <Sider width={200} style={{ background: '#fff' }}>
            <ShowSiderBar />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <ShowBody />
          </Content>
        </Layout>
      </Content>
        <Footer style={{ textAlign: 'center' }}>
          实施管理平台 ©2017 
        </Footer>
      </Layout>

    );
  }
}

export default App;
