import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import React, { Component } from 'react';
import {Form,Modal,Select,Radio} from 'antd';
import TeamApi from '../../api/teamApi';
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}

 class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '登录名',
      dataIndex: 'userName',
      width: '30%'
    }, {
      title: '姓名',
      dataIndex: 'userNickName',
    }, {
      title: '角色',
      dataIndex: 'role',
      render:(text,record,index)=>{
        return (
          text=='0'?"组长":"组员"
        )
      }
    }, {
      title: '操作',
      dataIndex: '操作',
      render: (text, record, index) => {
        return (
          this.state.dataSource.length > 0 ?
          (
            <Popconfirm title="确认删除?" onConfirm={() => this.onDelete(index)}>
              <a href="#">删除</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource:this.props.dataSource,
      modalVisible:false,
      allUserList:[],
      curTeam:this.props.curTeam
    };

    console.log('datasource:');
    console.log(this.state.dataSource);
  }

  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  onDelete = (index) => {
    const dataSource = [...this.state.dataSource];
    debugger;
    var userId = dataSource[index].userid;
    var teamId = dataSource[index].teamid;

    this.props.actions.DELETE_MEMBER(teamId,userId);
  }

  handleAdd = () => {
    console.log('handle add');
    this.setState({modalVisible:true});
    TeamApi.getAllUsers().then(response=> {
      this.setState({allUserList:response});
    })

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      dataSource:nextProps.dataSource,
      curTeam:nextProps.curTeam
    })
  }

  setModalVisible(value){
    this.setState({modalVisible:value});
  }


  handleSubmit(e){
    console.log("handle submit");
    e.preventDefault();
    var formData = this.props.form.getFieldsValue();
    var actions = this.props.actions;
    console.log(formData);
    console.log(this.props);
    console.log(this.state);
    var teamMembers=[];
    var curTeam = this.state.curTeam;
    debugger;
    formData._userId.forEach(function(id){
      teamMembers.push({
        userId:id,
        roleId:formData._role,
        teamId:curTeam
      });
    })
    console.log(`teamMembet to add ${teamMembers}`);
    actions.ADD_MEMBER(curTeam,teamMembers);
    this.setState({modalVisible:false});
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const dataSource  = this.state.dataSource;
    console.log('dataSource');
    console.log(dataSource);
    console.log(this.state);
    const userList = this.state.allUserList;
    console.log(userList);
    const userSelect = userList.map(user => (
      <Option key={user.userId} value={user.userId} > {user.userNickName} </Option>
    ));
    console.log(userSelect);
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>添加成员</Button>
        <Table bordered dataSource={dataSource} columns={columns} rowKey="userName"/>
        <Modal title="添加成员" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                  onCancel={()=> this.setModalVisible(false)}
                  onOk={ ()=> this.setModalVisible(false)} okText="关闭" >
          <Form horizontal onSubmit={this.handleSubmit.bind(this)} >
            <FormItem label="姓名">
            {getFieldDecorator('_userId')(
              <Select mode="multiple" placeholder="请选择要新增的成员"
                optionFilterProp="children"
                filterOption={(input, option) => option.props.children.toString().toLowerCase().indexOf(input.toString().toLowerCase()) >= 0}>
                {userSelect}
              </Select>
            )}
            </FormItem>

            <FormItem label="角色">
            {getFieldDecorator('_role')(
              <RadioGroup>
                <Radio value={0}>组长</Radio>
                <Radio value={1}>组员</Radio>
              </RadioGroup>
          )}
        </FormItem>
            <Button type="primary" htmlType="submit" >提交</Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default UserTable = Form.create()(UserTable);
