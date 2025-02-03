import React from 'react';
import {AtiForm, AtiFormItem} from 'ati-react-web';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './../style.css';

class FormComponent extends React.Component{
    render(){
        const handleSumbit = (value) =>{
            //do something
        }

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };

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
                    <AtiFormItem id = "userName" label = "username" config = {{rules: [{ required: true, message: 'Please input your username!' }]}}
                        {...formItemLayout}
                    >
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    </AtiFormItem>
                    <AtiFormItem id = "password" label = "password" config = {{rules: [{ required: true, message: 'Please input your Password!' }]}} 
                        {...formItemLayout}
                    >
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    </AtiFormItem>
                    <AtiFormItem id = "email" label = "email" 
                        config = {
                                    {rules: [{type : 'email', message : 'The input is not valid E-mail!',},
                                    { required: true, message: 'Please input your email!' }]}
                                } 
                        {...formItemLayout}
                    >
                        <Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="email" />
                    </AtiFormItem>
                    <AtiFormItem id = "date-picker" label = "Date" config = {{rules: [{ type : 'object', message: 'Please input your Date!' }]}} 
                        {...formItemLayout}
                    >
                        {/* <DatePicker format="YYYY-MM-DD" /> */}
                    </AtiFormItem>
                    <AtiFormItem id = "remember" config = {{valuePropName: 'checked',
                                                                initialValue: true}}
                        {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </AtiFormItem>
                </AtiForm>
            </div>
        );
    }
}

export default FormComponent;