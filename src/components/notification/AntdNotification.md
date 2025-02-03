---
category: Components
type: Feedback
noinstant: true
title: Notification
---

Display a notification message globally.

## When To Use

To display a notification message at any of the four corners of the viewport. Typically it can be
used in the following cases:

- A notification with complex content.
- A notification providing a feedback based on the user interaction. Or it may show some details
  about upcoming steps the user may have to follow.
- A notification that is pushed by the application.

## API

### `Sample Type (success,error,warning,info)`
```js
const openNotification = () => {
    AtiNotification({
        type:'success',
        content:'Success Content',
        title:'Success Title',
        config: {
            duration:4
        }
    });
};
    
 <Button onClick={openNotification}>Display Notification</Button>

```

### `Sample With Custom Props`
```js
const openNotification = () => {
    AtiNotification({
        content:'Content',
        duration:500,
        title:'Title',
        customStyle:null,
        icon:null,
        config:{
            placement: select('Placement',placements,'topRight'),
        }
    });
};
    
 <Button onClick={openNotification}>Display Notification</Button>

```