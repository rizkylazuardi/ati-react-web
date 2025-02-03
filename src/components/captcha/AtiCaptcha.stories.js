import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import { Provider } from 'react-redux'
import AtiCaptchaMd from './AtiCaptcha.md'
import AtiCaptcha from './AtiCaptcha'
import AtiServerCaptcha from './AtiServerCaptcha'
import AtiMessage from './../toast/AtiMessage'
import { AtiForm } from 'ati-reduxform-web'
import store from './../../store/index'

storiesOf('Captcha', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiCaptchaMd))
  .addDecorator(getStory => (
    <div style={{padding: '20px'}}>
      <Provider store={store}>
        {getStory()}
      </Provider>
    </div>)
  )
  .addWithDoc('Client Side', AtiCaptcha, null, () => {
    return (
      <AtiCaptcha
        id={text('id', 'captcha')}
        onGenerate={
          () => { 
            const passcode = Math.random().toString(36).substring(7);
            return (+new Date()) % 2 === 0 ? passcode.toLowerCase() : passcode.toUpperCase();
           }
        }
        onFailure={
          () => {
            AtiMessage({type: 'error', message: 'Wrong Captcha', duration: 5})
          }
        }
        onSuccess={
          () => {
            AtiMessage({type: 'success', message: 'True Captcha', duration: 5})
          }
        }
      />
    )
  }
  )
  .addWithDoc('Server Side', AtiServerCaptcha, null, () => {
    return (
      <AtiForm>
        <AtiServerCaptcha
          id={text('id', 'captcha')}
          refreshText="Try Another"
          onGenerate={
            () => { 
              const passcode = Math.random().toString(36).substring(7);
              return (+new Date()) % 2 === 0 ? passcode.toLowerCase() : passcode.toUpperCase();
            }
          }
          buttonType={select('buttonType', {primary: 'primary', ghost: 'ghost', dashed: 'dashed', danger: 'danger', default: 'default'}, 'primary', null)}
        />
      </AtiForm>
    )
  }
  )
