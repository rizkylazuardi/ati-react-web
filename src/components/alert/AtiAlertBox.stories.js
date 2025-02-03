import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select, object, array, func } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import { action } from '@storybook/addon-actions'
import { State, Store} from '@sambego/storybook-state'

import { Modal, Button } from 'reactstrap'

import { withState } from '@dump247/storybook-state'
import AtiAlertBox from './AtiAlertBox'
import AtiAlertBoxMd from './AtiAlertBox.md'

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiAlertBoxMd))
  .addWithDoc('Alert Message', AtiAlertBox, null, withState({isOpen: true})(({ store }) => {
    const onToggle = () => {
      store.set({isOpen: false})
    }
    const optionsColor = {
      primary: 'primary',
      secondary: 'secondary',
      success: 'success',
      info: 'info',
      warning: 'warning',
      danger: 'danger',
      light: 'light',
      dark: 'dark'
    }
    return (
      <AtiAlertBox id={text('id', 'alertId', null)}
        color={select('color', optionsColor, 'success', null)}
        isOpen={store.state.isOpen}
        onToggle={onToggle}
        closable={boolean('closable ? ', true)}
        message={text('message', 'Successfull !!!!', null)} />
    )
  }))
