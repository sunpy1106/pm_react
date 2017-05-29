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
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>

    );
  }
}

export default App;
