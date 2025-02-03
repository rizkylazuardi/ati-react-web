import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTimePickerMd from './AtiTimePicker.md'
import AtiTimePicker from './AtiTimePicker'
import { withState } from '@dump247/storybook-state'
import 'antd/dist/antd.css'

storiesOf('TimePicker', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiTimePickerMd))
  .addWithDoc('Default', AtiTimePicker, null, withState({value: null, text: null})(({ store }) => {
    const onChange = (time, timeString) => {
      //console.log(time, timeString)
      store.set({ value: time, text: timeString })
    }

    return (
      <div>
        <AtiTimePicker
          placeholder={text('placeholder', 'Select Time')}
          size={select('Size',
            {
              large: 'large', normal: 'normal', small: 'small'
            }, 'large', null)}
          disabled={boolean('disabled', false)}
          format={text('Time Format', 'HH:mm:ss')}
          minuteStep={number('MinuteStep', 15)}
          secondStep={number('secondStep', 30)}
          use12Hours={boolean('use12Hours', false)}
          value={store.state.value}
          events={
            {
              onChange: onChange
            }
          }
        />
        <p>{store.state.text} </p>
      </div>
    )
  }))
