import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import AtiTourGuide from './AtiTourGuide'
import { withReadme } from 'storybook-readme'
import AtiTourGuideMd from './AtiTourGuide.md'

storiesOf('Tour Guide', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTourGuideMd))
  .addDecorator(getStory => <div style={{padding: '150px'}}>{getStory()}</div>)
  .addWithDoc('AtiTourGuide', AtiTourGuide, null, () => {
    const placements = {
      top: 'top',
      left: 'left',
      right: 'right',
      bottom: 'bottom',
      auto: 'auto',
      center: 'center',
    }

    const triggers = {
      hover: 'hover',
      click: 'click',
    }

    const placementBeacons = {
        top: 'top',
        left: 'left',
        right: 'right',
        bottom: 'bottom',
    }
    
    const steps = [
        {
            target: '.class_a',
            content: 'This if my awesome feature!',
            placement: select('Placement', placements, 'bottom'),
            placementBeacon: select('Placement Beacon', placementBeacons, 'bottom')
        },
        {
            target: '.class_b',
            content: 'This if my awesome feature!',
            placement: select('Placement', placements, 'bottom'),
            placementBeacon: select('Placement Beacon', placementBeacons, 'bottom')
        },
        {
            target: '.class_c',
            content: 'This if my awesome feature!',
            placement: select('Placement', placements, 'bottom'),
            placementBeacon: select('Placement Beacon', placementBeacons, 'bottom')
        },
    ]
    
    return (
      <div>
        <AtiTourGuide
            run={boolean('Run ?', true)}
            steps={steps}
            continuous={boolean('continuous ?', true)}
            scrollToFirstStep={boolean('scrollToFirstStep ?', true)}
            showProgress={boolean('showProgress ?', true)}
            showSkipButton={boolean('showSkipButton ?', true)}
        />
        <br/>
        <br/>
        <br/>
        <span className="class_a">A</span>
        <br/>
        <br/>
        <br/>
        <span className="class_b">B</span>
        <br/>
        <br/>
        <br/>
        <span className="class_c">C</span>
      </div>
    )
  }
  )
