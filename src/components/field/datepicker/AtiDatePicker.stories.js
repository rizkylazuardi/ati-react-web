import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import AtiDatePicker from './AtiDatePicker'
import { withReadme } from 'storybook-readme'
import AtiDatePickerMd from './AtiDatepicker.md'
var moment = require('moment')

storiesOf('Datepicker', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiDatePickerMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Datepicker', AtiDatePicker, null, () => {
    const isValidDate = function(current) {
      return current.day() !== 0 && current.day() !== 6
    }

    return (
      <AtiDatePicker
        label={text('Label', 'Datepicker')}
        showError={boolean('Show Error?', true)}
        inputProps={
          {
            readOnly: true,
          }
        }
        events={
          {
            onDateChange: (e) => {
              console.log(e)
              //console.log(e.day())
              //console.log(e.format('YYYY-MM-DD'))
            },
            onFocus: () => {
            },
            onBlur: (e) => {
              //console.log(e.date())
            }
          }
        }
        disableOnClickOutside={boolean('disableOnClickOutside?', true)}
        timeFormat={boolean('timeFormat?', false)}
        locale={text('locale', 'id')}
        dateFormat={text('DateFormat', 'YYYY/DD/MM')}
        input={boolean('input?', true)}
        closeOnSelect={boolean('closeOnSelect?', true)}
        validDate={isValidDate}
        placeholder={text('Placeholder', null)}
        readonly={boolean('Readonly?', false)}
        value={text('value', moment('2018-08-01'))}
      />
    )
  }
  )
