import React, { Component } from 'react';
import './App.css';
import Navigation from './headers/pm_navigation';
import { Layout} from 'antd';


const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    console.log(this.props.children);
    return (
      <Layout>
        <Header  className="header">
          <Navigation />
        </Header>
        {this.props.children}
        <Footer style={{ textAlign: 'center' }}>
          实施管理平台 ©2017 由中国建设银行数据仓库项目组创建
        </Footer>
      </Layout>

    );
  }
}

export default App;
