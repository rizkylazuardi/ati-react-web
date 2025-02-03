import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiFooterMd from './AtiFooter.md'
import AtiFooter from './AtiFooter'

storiesOf('Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiFooterMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiFooter, null, () => {
    return (
      <AtiFooter
        style={object('style', {textAlign: 'center', color: 'black'}, null)}
      >
        Design ©2017 Created by Anabatic Technologies
      </AtiFooter>

    )
  }
  )
