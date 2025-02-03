# AtiTextPassword

## General

Text field component with password masking.
This component be able to show and hide the value. Use react state to pass the value to component props.

## Example

```js
import AtiTextPassword from './AtiTextPassword';

<AtiTextPassword 
    id='txtPassword'
    events={
        {
            onChange:(e)=>{
                console.log(e.target.value)
            }
        }
    }
/>
```