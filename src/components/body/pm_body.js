import React from 'react';
import PropTypes from 'prop-types';
import UserTable from './pm_user_table';
import {Form,Modal,Input,Button} from 'antd';
const FormItem = Form.Item;

class PMBody extends React.Component{
  constructor(props){
    super(props);
    this.state={
      modalVisible:false,
      memberList:this.props.memberList
    }
  }
  componentWillMount(){
    console.log('component mount');

  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps');
    this.setState({memberList:nextProps.memberList});
  }
  setModalVisible(value){
    this.setState({modalVisible:value});
  }


  handleSubmit(e){
    e.preventDefault();
    var formData = this.props.form.getFieldsValue();
    var actions = this.props.actions;
    actions.ADD_SUB_TEAM(this.state.curTeam,formData);
    this.setState({modalVisible:false});
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
    let memberList = this.state.memberList;
    console.log('memberList');
    console.log(memberList);
    const body  = <UserTable dataSource={memberList}  actions={this.props.actions} />;
    return (
      <div>
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
  memberList:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default PMBody =Form.create({})(PMBody);
