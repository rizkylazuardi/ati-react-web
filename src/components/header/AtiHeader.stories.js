import React from 'react'
import {Menu} from 'antd'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiHeaderMd from './AtiHeader.md'
import AtiHeader from './AtiHeader'

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiHeaderMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiHeader, null, () => {
    return (
      <AtiHeader
        style={object('style', {background: 'pink'}, null)}
      > Header Menu
      </AtiHeader>
    )
  }
  )

  .addWithDoc('Custom', AtiHeader, null, () => {
    return (
      <AtiHeader
        style={object('style', {background: '#1890ff'}, null)}
      >
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key='1'>Menu 1</Menu.Item>
          <Menu.Item key='2'>Menu 2</Menu.Item>
          <Menu.Item key='3'>Menu 3</Menu.Item>
        </Menu>

      </AtiHeader>
    )
  }
  )
