---
category: Components
type: Feedback
title: Popconfirm
---

A simple and compact confirmation dialog of an action.

## When To Use

A simple and compact dialog used for asking for user confirmation.

The difference with the `confirm` modal dialog is that it's more lightweight than the static popped full-screen confirm modal.

## API
```js
const confirm = (e) => {
    message.success('Next Step');
}

const cancel = (e) => {
    message.error('Click on cancel');
}


<AtiPopConfirm
    placement = {'topLeft'}
    textConfirm={'Are you sure delete this task ?'}
    okText={'Yes'}
    cancelText={'Cancel'}
    events={
        {onCancel: cancel, onConfirm: confirm}
    }
    icon = {<Icon type = "smile"/>}
>
    <a href="#">Delete Data</a>
    
</AtiPopConfirm>

```
