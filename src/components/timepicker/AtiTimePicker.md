---
category: Components
type: Input
title: AtiTimePicker
---

By clicking the input box, you can select a time from a popup panel.

## When To Use

Use when developer nee dot add input that just get time format.

## API
```js
function onChange(time, timeString) {
    console.log(time, timeString);
}

<AtiTimePicker 
    onChange={onChange}
    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
/>

```
