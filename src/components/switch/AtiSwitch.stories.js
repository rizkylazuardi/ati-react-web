import React from 'react'
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  select} from '@storybook/addon-knobs/react'
import {withReadme} from 'storybook-readme'
import AtiSwitchMd from './AtiSwitch.md'
import AtiSwitch from './AtiSwitch'

storiesOf('Switch Toogle', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiSwitchMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiSwitch, null, () => {
    return (
      <AtiSwitch
        autoFocus={boolean('autoFocus', false)}
        checked={boolean('checked', false)}
        disabled={boolean('disable', false)}
        loading={boolean('loading', false)}
        size={select('size', ['default', 'small'], 'default')}
        defaultChecked={boolean('defaultChecked', true)}
      />
    )
  })

  .addWithDoc('Custom With Icon', AtiSwitch, null, () => {
    return (
      <AtiSwitch
        unCheckedIconName={text('unCheckedIconName', 'cross')}
        checkedIconName={text('checkedIconName', 'check')}
        autoFocus={boolean('autoFocus', false)}
        checked={boolean('checked', false)}
        disabled={boolean('disable', false)}
        loading={boolean('loading', false)}
        size={select('size', ['default', 'small'], 'default')}
        events={
          {
            onChange: () => {
              //console.log('tes')
            }
          }
        }
      />
    )
  })
