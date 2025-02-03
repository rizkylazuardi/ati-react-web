import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'
import AtiTimePicker from './AtiTimePicker'
import { TimePicker } from 'antd';
import { message, Icon } from 'antd'
import { withReadme } from 'storybook-readme'
import AtiTimePickerMd from './AtiTimePicker.md'
import moment from 'moment';

storiesOf('Time Picker', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTimePickerMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiTimePicker, null, () => {

    function onChange(time, timeString) {
        console.log(time, timeString);
    }

    return (
      <div>
        <AtiTimePicker 
            onChange={onChange}
            defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
        />
      </div>

    )
  })
