import React from 'react';
import PropTypes from 'prop-types';
import UserTable from './pm_user_table';
import {Form,Modal,Input,Button} from 'antd';

const FormItem = Form.Item;

class PMBody extends React.Component{
  constructor(props){
    super(props);
    this.state={
      teamList:this.props.teamList,
      curTeam:this.props.curTeam,
      modalVisible:false
    }
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    this.setState({teamList:nextProps.teamList,curTeam:nextProps.curTeam})
  }

  getMember(teamList,teamId){
    console.log('getMember');
    console.table(teamList);
    for( var index in teamList){
        console.log(index);
        var team = teamList[index];
        if(team.teamId == teamId){
          return team;
        }else if(team.hasOwnProperty('children')){
          var childTeam = this.getMember(team.children,teamId);
          if(childTeam!=''){
            return childTeam;
          }

        }
    }
    return '';
  }

  setModalVisible(value){
    this.setState({modalVisible:value});
  }


  handleSubmit(){

  }
  handleTeamAdd(){
    this.setModalVisible({modalVisible:true});
  }
  handleTeamDel(){
    var res = Modal.confirm({
      title: 'Confirm',
      content: '删除此团队？',
      okText: '确认',
      cancelText: '取消',
    });
    console.log('return');
    console.log(res);
  }
  render(){
    let {getFieldProps} = this.props.form;
    const teamId = this.state.curTeam;
    const teamList = this.state.teamList.length!=0?this.getMember(this.state.teamList,teamId):'';
    console.log('teamList');
    console.log(teamList);
    console.log(this.props.actions);
    const body = teamList !='' ?
      <UserTable dataSource={teamList}  actions={this.props.actions} />
    :
      ''
    ;

    return (
      <div>
        <div>
          <h1>团队名称</h1>
          <p>{teamList.teamName}</p>
        </div>
        <div>
        <h1>团队成员及角色</h1>
          {body}
        </div>
        <div className='center'>
          <Button type="primary" onClick ={this.handleTeamAdd.bind(this)} >添加子团队</Button>
          <Button type="danger" onClick ={this.handleTeamDel.bind(this)} >删除团队</Button>
        </div>
        <Modal title="添加子团队" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
									onCancel={()=> this.setModalVisible(false)}
									onOk={ ()=> this.setModalVisible(false)} okText="关闭" >
					<Form horizontal onSubmit={this.handleSubmit.bind(this)} >
						<FormItem label="团队名称">
							<Input placeholder="请输入团队名称" {...getFieldProps('r_teamName')} />
						</FormItem>
						<FormItem label="团队负责人">
							<Input type="teamLeader" placeholder="请输入负责人" {...getFieldProps('r_teamLeader')} />
						</FormItem>
						<Button type="primary" htmlType="submit" >提交</Button>
					</Form>
				</Modal>
      </div>
    )
  }
}

PMBody.PropTypes = {
  teamList:PropTypes.array.isRequired,
  curTeam:PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default PMBody =Form.create({})(PMBody);
