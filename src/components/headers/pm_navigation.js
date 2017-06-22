import React  from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router';
import '../../App.css';
import { Header,Menu, Icon ,Tabs,message,Form,Modal,Input,Button} from 'antd';

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class Navigation extends React.Component{
	constructor(props){
		super(props);
    this.state={
      modalVisible:false,
      hasLogined:this.props.hasLogined,
			userId:''
    }
	}

	setModalVisible(value){
		this.setState({modalVisible:value});
	};

  handleClick(e){
    if(e.key=="login"){
      this.setModalVisible(true);
    }else if(e.key=="logout"){
      if(confirm("确认退出？")){
        this.setState({hasLogined:false,userId:''});
      }
    }else{

      this.props.onNavClick(e.key,this.state.userId);
    }
  }

	handleSubmit(e){
		e.preventDefault();
		var formData = this.props.form.getFieldsValue();
		var myFetchOptions={
			method: 'POST',
			headers: { 'Content-Type': 'application/json' ,'Accept': 'application/json'},
			body: JSON.stringify({
  		account: formData.userName,
  		password: formData.password,
  		})
		};

		console.log('handleSubmit');
		fetch("http://localhost:3001/login",myFetchOptions)
		.then(response=>response.json())
		.then(json => {
				console.log('success');
				console.log(json);
				this.setState({userId:json.account});
				this.setState({hasLogined:true});
				console.log('state');
				console.log(this.state);
			}
		).catch(function(){
			console.log("error");
		});
		message.success('success');
		this.setModalVisible(false);


	}


	render(){
		//console.log('userName: ' +this.state.userName);
		const {getFieldProps} = this.props.form;
		const userShow = this.state.hasLogined?
		<Menu.Item key="logout" className="register">
				<Icon type="user" />{this.state.userId}
			</Menu.Item>
			:
			<Menu.Item key="login" className="register">
					<Icon type="user" />登录
				</Menu.Item>
		;
		return (
      <Row>
            <Col span={24}>
              <Menu mode="horizontal" onClick={this.handleClick.bind(this)} >
                <Menu.Item key="job">
										 <Icon type="appstore" />事项管理
								</Menu.Item>
                <Menu.Item key="team">
										<Icon type="team" />团队管理
								</Menu.Item>

  							{userShow}
              </Menu>
								<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
									onCancel={()=> this.setModalVisible(false)}
									onOk={ ()=> this.setModalVisible(false)} okText="关闭" >

									<Tabs type="card"  >
										<TabPane tab="登录" key="1">
											<Form horizontal onSubmit={this.handleSubmit.bind(this)} >
												<FormItem label="账户">
													<Input placeholder="请输入您的账户"  {...getFieldProps('userName')}/>
												</FormItem>
												<FormItem label="密码">
													<Input type="password" placeholder="请输入您的密码" {...getFieldProps('password')}/>
												</FormItem>

												<Button type="primary" htmlType="submit" >登录</Button>
											</Form>
										</TabPane>
									</Tabs>
								</Modal>
							</Col>
            <Col span={2}></Col>
          </Row>

			);
		};
	}

	export default  Navigation = Form.create({})(Navigation);
