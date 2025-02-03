import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import AtiDropdown from './AtiDropdown'
import { withReadme } from 'storybook-readme'
import AtiDropdownMd from './AtiDropdown.md'

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiDropdownMd))
  .addDecorator(getStory => <div style={{padding: '50px'}}>{getStory()}</div>)
  .addWithDoc('AtiDropdown', AtiDropdown, null, () => {
    const placements = {
      bottomLeft: 'bottomLeft',
      bottomRight: 'bottomRight',
      bottomCenter: 'bottomCenter',
      topLeft: 'topLeft',
      topCenter: 'topCenter',
      topRight: 'topRight',
    }

    const triggers = {
      hover: 'hover',
      click: 'click',
      contextMenu: 'contextMenu'
    }

    const datasource = [
        {
            key: 'item-1',
            type: 'item',
            childern: <span>Navigation One</span>
        },
        {
            key: 'item-2',
            type: 'item',
            childern: <span>Navigation Two</span>
        },
        {
            key: 'divider-1',
            type: 'divider'
        },
        {
            key: 'item-3',
            type: 'item',
            disabled: true,
            childern: <span>Navigation Three</span>
        },
    ]

    return (
      <AtiDropdown
        dataSource={datasource}
        trigger={select('Trigger', triggers, 'hover')}
        placement={select('Placement', placements, 'bottomLeft')}
        disabled={boolean('Disabled', false)}
        childern={<span>Dropdown</span>}
      />
    )
  }
  )
