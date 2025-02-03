# AtiTextPhoneNumber

## General

Component for Phone Number format. ex : +62 812 990-39695
This component will return the country's flag

## Example

```js
import AtiTextPhoneNumber from './AtiTextPhoneNumber';

<AtiTextPhoneNumber 
    placeholder="Type your phone number"
    value={store.state.value}
    events={
        {
            onChange:(e)=>{
                store.set({value:e});
            }
        }
    }
/>
```

## Properties
| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| id | element id of textbox | string | - | True |
| name | element name of textbox | String | - | True |
| className | textbox additional / custom css class name | String | - | - |
| placeholder | placeholder text | String | - | - |
| value | value the component | String | - | - |
| style | component style | Object | - | - |
| events | confirmation events : onChange(e) | Function | - | - |