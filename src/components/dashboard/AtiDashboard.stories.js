import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiDashboardMd from './AtiDashboard.md'
import AtiDashboard from './AtiDashboard'
import AtiDashboardItem from './AtiDashboardItem'
import 'antd/dist/antd.css'

storiesOf('AtiDashboard', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiDashboardMd))
  .addWithDoc('Custom', AtiDashboard, null, () => {
    var layouts = {lg: [
      {i: '0', x: 0, y: 0, w: 10, h: 2, static: true}, // is not resizeable and dragable
      {i: '1', x: 11, y: 0, w: 10, h: 2},
      {i: '2', x: 22, y: 0, w: 10, h: 2},
      {i: '3', x: 33, y: 0, w: 10, h: 2},
      {i: '4', x: 0, y: 3, w: 32, h: 6},
      {i: '5', x: 33, y: 3, w: 10, h: 6}
    ]}

    return (
      <AtiDashboard
        cols={object('cols', { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 })}
        layouts={layouts}
        // lg for large resolution, md : medium, sm : small, xs : xtra small, xxs : xstra xstra small
        isResizable={boolean('isResizeable', true)}
        isDraggable={boolean('isDraggable', true)}
        preventCollision={boolean('preventCollision', false)}
        autoSize={boolean('autoSize', true)}
      >
        <AtiDashboardItem key='0'>
          <div style={{backgroundColor: '#123456', width: '100%', height: '100%'}}>
                        test
          </div>
        </AtiDashboardItem>
        <AtiDashboardItem key='1'>
          <span className='text'>This Tab 2 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key='2'>
          <span className='text'>This Tab 3 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key='3'>
          <span className='text'>This Tab 4 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key='4'>
          <span className='text'>This Tab 5 Content</span>
        </AtiDashboardItem>
        <AtiDashboardItem key='5'>
          <span className='text'>This Tab 6 Content</span>
        </AtiDashboardItem>

      </AtiDashboard>
    )
  })
