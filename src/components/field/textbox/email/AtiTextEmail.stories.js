import React from 'react'
import { storiesOf } from '@storybook/react'
import AtiTextEmail from './AtiTextEmail'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTextEmailMd from './AtiTextEmail.md'

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiTextEmailMd))
  .addWithDoc('Input Email', AtiTextEmail, null, () => {
    return (
      <AtiTextEmail
        value='akbar.wijayanto@gmail.com'
        guide={boolean('Guide Mode ?', null)}
        keepCharPositions={boolean('Keep Char Positions ?', null)}
        id={text('ID', null)}
        name={text('Name', null)}
        placeholder={text('Placeholder', null)}
        events={
          {
            onBlur: (e) => {
              //console.log(e.target.value)
            }
          }
        }
      />
    )
  })
