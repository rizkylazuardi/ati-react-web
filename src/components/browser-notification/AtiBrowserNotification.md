---
category: Components
type: Feedback
noinstant: true
title: Browser Notification 
---

React component with HTML5 Web Notification API. This component show nothing in dom element, but trigger HTML5 Web Notification API with render method in the life cycle of React.js.
Display desktop notifications to the user. These notifications' appearance and specific functionality vary across platforms but generally they provide a way to asynchronously provide information to the user.

## When To Use

- Wider reach across browsers: Safari, Chrome and Firefox when combined have a market share of about 61-77%. With these browsers providing support for web push the reach of web push notifications is immense.
- Access to users who are not on your website: Using web push notifications, you can reach out to those users who are not on your website
- Ability to re engage users without knowing their contact details: Web push notifications don’t need a user’s email or other contact details. If a user who once visited your website and has given his permission to send him notifications, he can be sent notifications anytime without needing his email
- Higher opt-ins as compared to emails: Since the users don’t need to give their email id or other contact details and they also have the ability to unsubscribe from receiving notification easily whenever they want, the opt-ins for web push notifications are higher than emails.

## API

```js
const options = {
        tag: now,
        body: 'Hello' + new Date(),
        icon: 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png',
        lang: 'en',
        dir: 'ltr'
    }

<AtiBrowserNotification 
    title={'Test Title'}
    timeout={5000}
    ignore={false}
    options={options}
/>
```

To trigger the notification, just change the props

```js

state = {
    title:''
}

const handleClick = () =>{
    if(store.state.ignore){
        return;
    }
    const title = 'React-Web-Notification';
    this.setState({title:title});
}

const options = {
    tag: now,
    body: 'Hello' + new Date(),
    icon: 'http://georgeosddev.github.io/react-web-notification/example/Notifications_button_24.png',
    lang: 'en',
    dir: 'ltr'
}

<button onClick={handleClick.bind(this)}>Notif!</button>
<AtiBrowserNotification 
    title={title}
    timeout={5000}
    ignore={false}
    options={options}
/>
```