import React from 'react';
import {AtiForm, AtiFormItem} from 'ati-react-web';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './style.css';

class FormComponent extends React.Component{
    render(){
        const handleSumbit = (value) =>{
            console.log(value.userName + value.password)
        }
        return (
            <div style = {{padding : '20px'}}>
                <h3>User Management</h3>
                <hr/>
                <AtiForm className = "login-form" layout = "horizontal"
                    events = {
                        {
                            onSubmit : handleSumbit
                        }
                    }
                >
                    <AtiFormItem id = "userName" label = "username" config = {{rules: [{ required: true, message: 'Please input your username!' }]}}>
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </AtiFormItem>
            
                    <AtiFormItem id = "password" label = "password" config = {{rules: [{ required: true, message: 'Please input your Password!' }]}} >
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    </AtiFormItem>
                    <AtiFormItem id = "remember" config = {{valuePropName: 'checked',
                                                            initialValue: true}}>
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </Button>
                        Or <a href="">register now!</a>
                        
                    </AtiFormItem>
                </AtiForm>
            </div>
        );
    }
}

export default FormComponent;