import React from 'react'
import { storiesOf } from '@storybook/react'
import AtiTextPhoneNumber from './AtiTextPhoneNumber'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTextPhoneNumberMd from './AtiTextPhoneNumber.md'
import { withState } from '@dump247/storybook-state'

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiTextPhoneNumberMd))
  .addWithDoc('Input Phone Number', AtiTextPhoneNumber, null, withState({value: null})(({ store }) => {
    return (
      <AtiTextPhoneNumber
        placeholder={text('Place Holder', 'Type your phone number')}
        value={store.state.value}
        events={
          {
            onChange: (e) => {
              store.set({value: e})
            }
          }
        }
      />
    )
  }))
