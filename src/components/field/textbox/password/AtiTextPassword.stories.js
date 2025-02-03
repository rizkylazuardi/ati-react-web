import React from 'react'
import { storiesOf } from '@storybook/react'
import AtiTextPassword from './AtiTextPassword'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTextPasswordMd from './AtiTextPassword.md'
import { withState } from '@dump247/storybook-state'

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiTextPasswordMd))
  .addWithDoc('Input Password', AtiTextPassword, null, withState({value: null})(({ store }) => {
    return (
      <AtiTextPassword
        id='txtPassword'
        value={store.state.value}
        events={
          {
            onChange: (e) => {
              store.set({value: e.target.value})
            }
          }
        }
      />
    )
  }))
