import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiFormMd from './AtiForm.md'
import AtiForm from './AtiForm'
import AtiFormItem from './AtiFormItem'
import { Icon, Input, Button, DatePicker } from 'antd'
import 'antd/dist/antd.css'
import './style.css'

storiesOf('AtiForm', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiFormMd))
  .addWithDoc('Custom', AtiForm, null, () => {
    const handleSumbit = (value) => {
      //console.log(value)
    }

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    }

    return (
      <AtiForm
        events={
          {
            onSubmit: handleSumbit
          }
        }
      >
        <AtiFormItem id='userName' label='username' config={{rules: [{ required: true, message: 'Please input your username!' }]}}
          {...formItemLayout}
        >
          <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Username' />
        </AtiFormItem>
        <AtiFormItem id='password' label='password' config={{rules: [{ required: true, message: 'Please input your Password!' }]}}
          {...formItemLayout}
        >
          <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='Password' />
        </AtiFormItem>
        <AtiFormItem id='email' label='email'
          config={
            {rules: [{type: 'email', message: 'The input is not valid E-mail!'},
              { required: true, message: 'Please input your email!' }]}
          }
          {...formItemLayout}
        >
          <Input prefix={<Icon type='email' style={{ color: 'rgba(0,0,0,.25)' }} />} type='email' placeholder='email' />
        </AtiFormItem>
        <AtiFormItem id='date-picker' label='Date' config={{rules: [{ type: 'object', message: 'Please input your Date!' }]}}
          {...formItemLayout}
        >
          <DatePicker format='YYYY-MM-DD' />
        </AtiFormItem>
        <AtiFormItem id='remember' config={{valuePropName: 'checked', initialValue: true}}
          {...tailFormItemLayout}
        >
          <Button type='primary' htmlType='submit'>
                        Submit
          </Button>
        </AtiFormItem>

      </AtiForm>
    )
  })
