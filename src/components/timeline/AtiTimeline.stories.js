import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import AtiTimeline from './AtiTimeline'
import { withReadme } from 'storybook-readme'
import AtiTimelineMd from './AtiTimeline.md'
import { Icon } from 'antd'

storiesOf('Timeline', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTimelineMd))
  .addDecorator(getStory => <div style={{padding: '50px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiTimeline, null, () => {
    const datas = [
      {key: 3, color: 'green', dot: null, text: 'Technical testing 2015-09-01'},
      {key: 2, color: 'red', dot: null, text: 'testing 2015-09-01'},
      {key: 7, color: 'blue', dot: null, text: 'Technical 2015-09-01'},
      {key: 4, color: 'blue', dot: <Icon type='clock-circle-o' />, text: '2015-09-01'}
    ]

    return (
      <AtiTimeline
        dataSource={datas}
        pending={boolean('Pending', false)}
        reverse={boolean('Reverse', false)}
      />
    )
  }
  )
