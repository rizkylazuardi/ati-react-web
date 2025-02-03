import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, number, select, object } from '@storybook/addon-knobs/react'
import {notification, Button, Icon} from 'antd'
import { withReadme } from 'storybook-readme'
import AntdNotificationMd from './AntdNotification.md'
import AtiNotification from './AtiNotification'

storiesOf('Notification', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AntdNotificationMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Notification With Icon', notification, null, () => {
    const content = text('Content', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.')
    const duration = number('Duration', 4)
    const title = text('Title', 'Notification Title')

    const types = {
      success: 'success',
      error: 'error',
      info: 'info',
      warning: 'warning'
    }
    const openNotificationWithIcon = (type) => {
      AtiNotification({
        type,
        content,
        title,
        config: {
          duration
        }
      })
    }
    return (
      <div>
        <Button onClick={() => openNotificationWithIcon(select('Type', types, 'success'))}>Display Notification</Button>
      </div>

    )
  }
  )
  .addWithDoc('Notification Style', notification, null, () => {
    const content = text('Content', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.')
    const duration = number('Duration', 4)
    const notifStyle = object('Styles', {width: 600, background: 'red'}, null)

    const openNotification = () => {
      AtiNotification({
        content,
        duration,
        title: 'Custom Style',
        customStyle: notifStyle,
        icon: null,
        type: 'open'
      })
    }
    return (
      <div>
        <Button onClick={() => openNotification()}>Display Notification</Button>
      </div>

    )
  }
  )
  .addWithDoc('Notification With Custom Icon', notification, null, () => {
    const content = text('Content', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.')
    const duration = number('Duration', 4)

    const openNotification = () => {
      AtiNotification({
        content,
        duration,
        title: 'Custom Icon',
        icon: <Icon type='plus' />,
        customStyle: null,
        type: 'open'
      })
    }
    return (
      <div>
        <Button onClick={() => openNotification()}>Display Notification</Button>
      </div>

    )
  }
  )
  .addWithDoc('Ati Notification', notification, null, () => {
    const content = text('Content', 'This is the content of the notification. This is the content of the notification. This is the content of the notification.')
    const duration = number('Duration', 4)
    const title = text('Title', 'Notification Title')

    const placements = {
      topRight: 'topRight',
      topLeft: 'topLeft',
      bottomLeft: 'bottomLeft',
      bottomRight: 'bottomRight'
    }

    const openNotification = () => {
      AtiNotification({
        content,
        duration,
        title,
        customStyle: null,
        icon: null,
        config: {
          placement: select('Placement', placements, 'topRight')
        }
      })
    }

    return (
      <Button onClick={openNotification}>Display Notification</Button>
    )
  }
  )
