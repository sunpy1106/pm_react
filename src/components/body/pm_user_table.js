import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import React, { Component } from 'react';

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

export default class UserTable extends React.Component {
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
      dataSource:this.props.dataSource,
      count:4
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
    console.log('handleAdd');
    const {  dataSource,count } = this.state;
    console.log(dataSource);
    console.log(count);
    const newData = {
      key: count,
      userNickName: `Edward King ${count}`,
      userName: '刘飞',
      role: '组员'
    };
    console.log(newData);
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
    console.log(this.state);
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      dataSource:nextProps.dataSource

    })
  }
  render() {
    console.log("userTable props");
    console.log(this.props);
    console.log(this.state);
    const { dataSource } = this.state;;
    const columns = this.columns;
    return (
      <div>
        <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
        <Table bordered dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}
