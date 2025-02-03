import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import AtiTooltip from './AtiTooltip'
import { withReadme } from 'storybook-readme'
import AtiTooltipMd from './AtiTooltip.md'

storiesOf('Tooltip', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTooltipMd))
  .addDecorator(getStory => <div style={{padding: '50px'}}>{getStory()}</div>)
  .addWithDoc('AtiTooltip', AtiTooltip, null, () => {
    const placements = {
      top: 'top',
      left: 'left',
      right: 'right',
      bottom: 'bottom',
      topLeft: 'topLeft',
      topRight: 'topRight',
      bottomLeft: 'bottomLeft',
      bottomRight: 'bottomRight',
      leftTop: 'leftTop',
      leftBottom: 'leftBottom',
      rightTop: 'rightTop',
      rightBottom: 'rightBottom'
    }

    const triggers = {
      hover: 'hover',
      click: 'click',
      focus: 'focus',
      contextMenu: 'contextMenu'
    }

    return (
      <AtiTooltip
        visibleOnLoad={boolean('Visible on Load ?', true)}
        arrowPointAtCenter={boolean('Arrow Point At Center', false)}
        autoAdjustOverflow={boolean('Auto Adjust Overflow', true)}
        title={text('Title', 'This is tooltip')}
        mouseLeaveDelay={number('Leave Delay', 0)}
        mouseEnterDelay={number('Enter Delay', 0.1)}
        trigger={select('Trigger', triggers, 'hover')}
        placement={select('Placement', placements, 'top')}
      >
        <span>Tooltip</span>
      </AtiTooltip>
    )
  }
  )
