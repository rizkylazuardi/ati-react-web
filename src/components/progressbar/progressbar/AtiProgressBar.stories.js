import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import AtiProgressBar from './../progressbar/AtiProgressBar'
import { withReadme } from 'storybook-readme'
import AtiProgressBarMd from './../progressbar/AtiProgressBar.md'

storiesOf('Progress Bar', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiProgressBarMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Progress Bar', AtiProgressBar, null, () => {
    return (
      <AtiProgressBar
        asBar={boolean('asBar', true)}
        type={select('type', ['percentage', 'range', 'infinite'], 'percentage')}
        className={select('className', ['progressBar', 'backdropModals', 'backgroundModalClasName'], 'progressBar')}
        value={text('value', '50')}
        maxValues={text('maxValues', '100')}
        color={select('color', ['danger', 'warning', 'info', 'success'], 'info')}
        striped={boolean('striped', true)}
      />
    )
  }
  )
