import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import React, { Component } from 'react';
import {Form,Modal} from 'antd';

const FormItem = Form.Item;

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
      dataIndex: 'userNickName',
      width: '30%',
      render: (text, record, index) => (
        <EditableCell
          value={text}
          onChange={this.onCellChange(index, 'name')}
        />
      ),
    }, {
      title: '姓名',
      dataIndex: 'userName',
    }, {
      title: '角色',
      dataIndex: 'role',
    }, {
      title: '操作',
      dataIndex: 'operation',
      render: (text, record, index) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(index)}>
              <a href="#">Delete</a>
            </Popconfirm>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource:this.props.dataSource.teamMember,
      curTeam:this.props.dataSource.teamId,
      count:4,
      modalVisible:false
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
    dataSource.splice(index, 1);
    this.setState({ dataSource });
  }

  handleAdd = () => {
    this.setState({modalVisible:true});
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      dataSource:nextProps.dataSource.teamMember,
      curTeam:nextProps.dataSource.teamId
    })
  }

  setModalVisible(value){
    this.setState({modalVisible:value});
  }


  handleSubmit(e){
    e.preventDefault();
    var formData = this.props.form.getFieldsValue();
    console.log(formData);
    var actions = this.props.actions;
    actions.ADD_MEMBER(this.state.curTeam,formData);

    this.setState({modalVisible:false});
  }

  render() {
    let {getFieldProps} = this.props.form;
    console.log("userTable props");
    console.log(this.props);
    const dataSource  = this.state.dataSource;
    console.table(dataSource);
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>添加成员</Button>
        <Table bordered dataSource={dataSource} columns={columns} />
        <Modal title="添加成员" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                  onCancel={()=> this.setModalVisible(false)}
                  onOk={ ()=> this.setModalVisible(false)} okText="关闭" >
          <Form horizontal onSubmit={this.handleSubmit.bind(this)} >
            <FormItem label="姓名">
              <Input placeholder="请输入成员姓名" {...getFieldProps('r_userName')} />
            </FormItem>
            <FormItem label="角色">
              <Input type="teamLeader" placeholder="请输入成员角色" {...getFieldProps('r_role')} />
            </FormItem>
            <Button type="primary" htmlType="submit" >提交</Button>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default UserTable = Form.create()(UserTable);
