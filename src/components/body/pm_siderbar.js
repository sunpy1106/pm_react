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
      let vdom = [];
      if (menuObj instanceof Array) {
          let list = [];
          for (var item of menuObj) {
              list.push(this.generateMenu(item));
          }
          vdom.push(list);
      } else if(menuObj.hasOwnProperty('children')){
          vdom.push(
              <SubMenu key={menuObj.teamId} title = {menuObj.teamName}>
                {this.generateMenu(menuObj.children)}
              </SubMenu>
          );
      }else{
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
