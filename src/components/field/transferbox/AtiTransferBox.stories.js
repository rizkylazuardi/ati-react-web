import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'
import AtiTransferBox from './AtiTransferBox'
import { withReadme } from 'storybook-readme'
import AtiTransferBoxMd from './AtiTransferBox.md'

storiesOf('TransferBox', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTransferBoxMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiTransferBox, null, () => {
    const keys = []
    const getMockData = () => {
      const mockData = []
      for (let i = 0; i < 20; i++) {
        const data = {
          id: i.toString(),
          title: `content${i + 1}`,
          description: `description of content${i + 1}`,
          chosen: Math.random() * 2 > 1
        }
        if (data.chosen) {
          keys.push(data.id)
        }
        mockData.push(data)
      }
      return mockData
    }

    return (
      <div id='test'>
        <AtiTransferBox
          rowKey={item => item.id}
          dataSource={getMockData()}
          targetKeys={keys}
          render={item => `${item.title}-${item.description}`}
          showSearch={boolean('Show Search', false)}
        />
      </div>
    )
  }
  )
