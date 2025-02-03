import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import AtiMultiProgressBar from './../multiprogressbar/AtiMultiProgressBar'
import AtiProgressBar from './../progressbar/AtiProgressBar'
import { withReadme } from 'storybook-readme'
import AtiMultiProgressBarMd from './../multiprogressbar/AtiMultiProgressBar.md'

storiesOf('Progress Bar', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiMultiProgressBarMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Multi ProgressBar', AtiMultiProgressBar, null, () => {
    return (
      <AtiMultiProgressBar>
        <AtiProgressBar
          asBar={boolean('asBar', true, 'Group 1')}
          color={select('color', ['danger', 'warning', 'info', 'success'], 'info', 'Group 1')}
          type={select('type', ['percentage', 'range', 'infinite'], 'percentage', 'Group 1')}
          value={text('value', '50', 'Group 1')}
          maxValues={text('maxValues', '100', 'Group 1')}
          striped={boolean('striped', true, 'Group 1')}
        />
        <AtiProgressBar
          asBar={boolean('asBar2', true, 'Group 2')}
          type={select('type2', ['percentage', 'range', 'infinite'], 'percentage', 'Group 2')}
          value={text('value2', '50', 'Group 2')}
          maxValues={text('maxValues2', '100', 'Group 2')}
          striped={boolean('striped2', true, 'Group 2')}
          color={select('color2', ['danger', 'warning', 'info', 'success'], 'info', 'Group 2')}
        />
      </AtiMultiProgressBar>
    )
  }
  )
