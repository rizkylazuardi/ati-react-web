import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number, select, object, bool } from '@storybook/addon-knobs/react'
import AtiBackTop from './AtiBackTop'
import { withReadme } from 'storybook-readme'
import AtiBackTopMd from './AtiBackTop.md'
import index from '../../index.css'

storiesOf('BackTop', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiBackTopMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiBackTop, null, () => {
    return (
      <div style={{width: '100%', height: 1000}}>
        <AtiBackTop
          visibilityHeight={number('visibilityHeight', 400)}
        />
        <p>Test Hello</p>
      </div>
    )
  }
  ).addWithDoc('With child element', AtiBackTop, null, () => {
    return (
      <div style={{width: '100%', height: 1000}}>
        <AtiBackTop
          childern={<div className='ant-back-top-inner'>UP</div>}
          visibilityHeight={number('visibilityHeight', 400)}
        />
        <p>Test Hello</p>
      </div>
    )
  }
  )
