import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiButton from './AtiButton'
import AtiButtonMd from './AtiButton.md'
import { Provider } from 'react-redux'
import store from './../../store/index'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiButtonMd))
  .addDecorator(getStory => (
    <div style={{padding: '20px'}}>
      <Provider store={store}>
        {getStory()}
      </Provider>
    </div>)
  )
  .addWithDoc('Default', AtiButton,
    'It should render a button with a label',
    () => {
      const optionsColor = {
        primary: 'primary',
        secondary: 'secondary',
        success: 'success',
        info: 'info',
        warning: 'warning',
        danger: 'danger',
        link: 'link'
      }

      return (
        <AtiButton htmlType={select('htmlType', {button: 'button', submit: 'submit'}, 'button', null)}
           disabled={boolean('disabled', false)}
           block={boolean('block ?', false)}
           ghost={boolean('ghost ?', false)}
          loading={boolean('loading ?', false)}
          icon='eye'
          type={select('type', {primary: 'primary', ghost: 'ghost', dashed: 'dashed', danger: 'danger', default: 'default'}, 'primary', null)}
          size={select('size', {small: 'small', large: 'large', default: 'default'}, 'default', null)}
          id={text('id', 'myButton')} 
          text={text('text', 'click Me')}
           events={
             {onClick: () => {
              alert('Hello')
             }
             }
           }
        />
      )
    }
  )
