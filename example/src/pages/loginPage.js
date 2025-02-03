import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import baseRequest from './../service/baseRequest';
const FormItem = Form.Item;

class LoginForm extends Component {
    state = {
        isLoading: false,
        response: null,
    }

    _onSuccess = (response) => {
        this.setState({isLoading: false, response})
    }
    
    _onError = (error) => {
        this.setState({isLoading: false, response: error})
    }

    buildDataRequest = (username, password) => {
        const request = {
            metadata : {
                  datetime : "1997-07-16T19:20:30.45+01:00",
                  deviceId : "111222",
                  devicePlatform : "Android",
                  deviceOSVersion : "5.0.0",
                  appId : "1",
                  appVersion : "2.0",
                  latitude : "6.5",
                  longitude : "110.5"    
            },
            body:{
                   username,
                   password,
                   channel : "MOB"
            }
        }
        return request;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, formData) => {
          if (!err) {
           const url = 'https://mobileservice-001.bcalife.co.id/mobile-webconsole-beta/apps/pocket/login';
            this.setState({...this.state, isLoading: true})
            baseRequest(
                    url, 
                    'post', 
                    this.buildDataRequest(formData.userName, formData.password),
                    {"Content-Type": "application/json"},
                    this._onSuccess,
                    this._onError);
            }
        });
      }
    
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <br/>
              <a className="login-form-forgot" href="">Forgot password</a>
            <Button 
                    loading={this.state.isLoading}
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
            Log in
            </Button>
              Or <a href="">register now!</a>
              <br/>
              <Row>
                  <Col>
                    server response : {JSON.stringify(this.state.response)}
                  </Col>
              </Row>
            </FormItem>
          </Form>
        );
      }
    }
    
const Login = Form.create()(LoginForm);

export default Login;