import React, { Component } from 'react';
import './App.css';
import PMLogin from './headers/pm_login';
import { Layout} from 'antd';
import PMBody from './body/pm_body';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header  className="header">
          <PMLogin />
        </Header>
        <PMBody />
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>

    );
  }
}

export default App;
