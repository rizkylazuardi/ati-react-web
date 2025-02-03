---
category: Components
type: Navigation
title: Dropdown
---

A dropdown list.

## When To Use

If there are too many operations to display, you can wrap them in a `AtiDropdown`. By clicking/hovering on the trigger, a dropdown menu should appear, which allows you to choose one option and execute relevant actions.

## API
```js
//create items for menu, can be created manually or from ajax
const datasource = [
    {
        key: 'item-1',
        type: 'item',
        childern: <span>Navigation One</span>
    },
    {
        key: 'item-2',
        type: 'item',
        childern: <span>Navigation Two</span>
    },
    {
        key: 'divider-1',
        type: 'divider'
    },
    {
        key: 'item-3',
        type: 'item',
        disabled: true,
        childern: <span>Navigation Three</span>
    },
]

//import side menu component, mandatory things you must do
import AtiDropdown from './AtiDropdown'

    //Tag for component single side menu 
    <AtiDropdown
      dataSource={datasource}
    />

```
### Dropdown

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| disabled | whether the dropdown menu is disabled | boolean | - |
| getPopupContainer | to set the container of the dropdown menu. The default is to create a `div` element in `body`, you can reset it to the scrolling area and make a relative reposition. [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | Function(triggerNode) | `() => document.body` |
| datasource | the dropdown menu | object | - |
| placement | placement of pop menu: `bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | String | `bottomLeft` |
| trigger | the trigger mode which executes the drop-down action | Array&lt;`click`\|`hover`\|`contextMenu`> | `['hover']` |
| visible | whether the dropdown menu is visible | boolean | - |
| onVisibleChange | a callback function takes an argument: `visible`, is executed when the visible state is changed | Function(visible) | - |
