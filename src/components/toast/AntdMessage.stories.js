import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs/react'
import {Button} from 'antd'
import { withReadme } from 'storybook-readme'
import AntdMessageMd from './AntdMessage.md'
import AtiMessage from './AtiMessage'

storiesOf('Message or Toast', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AntdMessageMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Message Simple', AtiMessage, null, () => {
    const message = text('Message', 'This is a prompt message for success, and it will disappear in 10 seconds')
    const duration = number('Duration', 10)

    const success = () => {
      AtiMessage({type: 'success', message, duration})
    }
    const warning = () => {
      AtiMessage({type: 'warning', message, duration})
    }
    const error = () => {
      AtiMessage({type: 'error', message, duration})
    }
    const info = () => {
      AtiMessage({type: 'info', message, duration})
    }
    const loading = () => {
      AtiMessage({type: 'loading', message, duration})
    }
    return (
      <div>
        <Button onClick={success}>Display Success Message</Button>
        <Button onClick={warning}>Display Warning Message</Button>
        <Button onClick={error}>Display Error Message</Button>
        <Button onClick={info}>Display Info Message</Button>
        <Button onClick={loading}>Display Loading Message</Button>
      </div>

    )
  }
  )
