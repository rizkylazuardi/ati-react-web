import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTextbox from './AtiTextbox'
import AtiTextboxMd from './AtiTextbox.md'
import { Provider } from 'react-redux'
import store from './../../../../store/index'

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <div style={{padding: '20px'}}>
      <Provider store={store}>
        {getStory()}
      </Provider>
    </div>)
  )
  .addDecorator(withReadme(AtiTextboxMd))
  .addWithDoc('Default', AtiTextbox, null, () => {
    const optionsSize = {
      sm: 'sm',
      md: 'md',
      lg: 'lg'
    }
    const max = number('Max Length', 10)
    const min = number('Min Length', 5)

    return (
      <AtiTextbox id={text('id', 'email')} name={text('name', 'email')}
        type='text'
        label={text('Label', 'Email Address')}
        className={text('className', 'my-custom-class')}
        placeholder={text('placeHolder', 'Input Email Here')}
        size={select('Size', optionsSize, 'sm', null)}
        inputLength={{max: max, min: min}}
        readonly={boolean('readonly', false, null)}
        disabled={boolean('disabled', false, null)}
        showError={boolean('showError', null, null)}
        defaultValue='Pretet'
        addonPlacement='right'
        addon={
          ',##'
        }
      />
    )
  }
  )
