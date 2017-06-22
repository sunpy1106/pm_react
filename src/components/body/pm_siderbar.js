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


  generateMenu(menuObj) {
      debugger;
      let vdom = [];
      if (menuObj instanceof Array) {
          let list = [];
          for (var item of menuObj) {
              list.push(this.generateMenu(item));
          }
          vdom.push(list);
      } else if(menuObj.children.length > 0){
          vdom.push(
              <SubMenu key={menuObj.teamId} title = {menuObj.teamName} onTitleClick={(e)=>this.props.onMenuClick(e.key)}>
                {this.generateMenu(menuObj.children)}
              </SubMenu>
          );
      }else if(menuObj.children.length == 0){
        vdom.push(
            <Menu.Item key={menuObj.teamId}>
              {menuObj.teamName}
            </Menu.Item>
        );
      }
      return vdom;
  }

  render(){
    const teams = this.props.teams;
    const teamMenu= this.generateMenu(teams);
    return(
      <Menu mode="inline"    style={{ height: '100%' }}  onClick={( e ) => {
        this.props.onMenuClick(e.key);
      }}>
      {teamMenu}
      </Menu>
    )
  }
}



export default SiderBar;
