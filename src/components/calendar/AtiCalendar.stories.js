import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'
import { AtiCalendar, AtiCalendarViews } from './AtiCalendar'
import { withReadme } from 'storybook-readme'
import AtiCalendarMd from './AtiCalendar.md'
import moment from 'moment';

storiesOf('Calendar', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiCalendarMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiCalendar, null, () => {

    function getEvents() {
        return [
            {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2018, 10, 7),
            end: new Date(2018, 10, 9),
          },
          {
            id: 1,
            title: 'Long Event',
            start: new Date(2018, 10, 8),
            end: new Date(2018, 10, 11),
          },
        ]
    }

    return (
      <div style={{height:'100vh'}}>
        <AtiCalendar
            selectable
            events={getEvents()}
            defaultView={AtiCalendarViews.MONTH}
            max={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
        />
      </div>

    )
  })
