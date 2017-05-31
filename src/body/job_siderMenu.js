import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
import '../App.css';

class  JobSiderMenu extends React.Component{
  render(){
    return(
      <Menu mode="inline"   style={{ height: '100%' }}    >
         <SubMenu key="job" title={<span><Icon type="appstore" />事项</span>}>
           <Menu.Item key="pendingJob">待处理</Menu.Item>
           <Menu.Item key="unfinishedJob">未完成</Menu.Item>
           <Menu.Item key="finishedJob">已完成</Menu.Item>
         </SubMenu>
         <SubMenu key="task" title={<span><Icon type="solution" />任务</span>}>
           <Menu.Item key="delayTask">延迟</Menu.Item>
           <Menu.Item key="unfinishedTask">未完成</Menu.Item>
           <Menu.Item key="finishedTask">已完成</Menu.Item>

         </SubMenu>
      </Menu>


    );
  }
}

export default  JobSiderMenu;
