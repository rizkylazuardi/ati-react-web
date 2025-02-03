import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number, select, object, bool } from '@storybook/addon-knobs/react'
import AtiBadgeNumber from './AtiBadgeNumber'
import AtiBadgeDot from './AtiBadgeDot'
import { withReadme } from 'storybook-readme'
import AtiBadgeMd from './AtiBadge.md'
import './../../index.css'

storiesOf('Badge', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiBadgeMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Badge Number', AtiBadgeNumber, null, () => {
    return (
      <AtiBadgeNumber
        count={number('Count', 9)}
        title={text('Title', 'Card Title')}
        showZero={false}
        overflowCount={number('Overflow Count', 99)}
        offset={object('Offset', [], null)}

        className='test-badge'
      >
        Test
      </AtiBadgeNumber>
    )
  }
  )

  .addWithDoc('Badge Dot', AtiBadgeDot, null, () => {
    const status = {
      success: 'success',
      processing: 'processing',
      default: 'default',
      error: 'error',
      warning: 'warning'
    }

    return (
      <AtiBadgeDot
        status={select('Status', status, 'warning')}
        title={text('Title', 'Title')}
        offset={object('Offset', [], null)}
      >
        Test
      </AtiBadgeDot>
    )
  }
  )
