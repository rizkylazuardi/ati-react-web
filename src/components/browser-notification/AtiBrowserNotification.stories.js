import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs/react'
import AtiBrowserNotification from './AtiBrowserNotification'
import { withReadme } from 'storybook-readme'
import AtiBrowserNotificationMd from './AtiBrowserNotification.md'
import { withState } from '@dump247/storybook-state'

storiesOf('Browser Notification', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiBrowserNotificationMd))
  .addDecorator(getStory => <div style={{padding: '50px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiBrowserNotification, null, withState({ignore: false, title: ''})(({ store }) => {
    const now = Date.now()

    const options = {
      tag: now,
      body: 'Hello' + new Date(),
      icon: 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png',
      lang: 'en',
      dir: 'ltr'
    }

    const handlePermissionGranted = () => {
      store.set({ignore: false})
    }
    const handlePermissionDenied = () => {
      store.set({ignore: true})
    }

    const handleClick = () => {
      if (store.state.ignore) {
        return
      }

      const title = 'React-Web-Notification' + now
      store.set({title: title})
    }

    return (
      <div>
        <button onClick={handleClick}>Notif!</button>
        <AtiBrowserNotification
          title={store.state.title}
          timeout={number('timeout', 5000)}
          ignore={store.state.ignore}
          options={options}
          events={
            {
              onPermissionGranted: handlePermissionGranted,
              onPermissionDenied: handlePermissionDenied
            }
          }
        />
      </div>
    )
  }
  ))

