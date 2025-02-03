# AtiTextEmail

## General

Component for email format. ex : akbar.wijayanto@anabatic.com
Use [emailMas](https://github.com/text-mask/text-mask/tree/master/addons#emailmask) 
addons to masking the input text with email format 

## Example

```js
import AtiTextEmail from './AtiTextEmail';

<AtiTextEmail 
    value={this.state.email} 
    guide={true}
    keepCharPositions={true}
    id='txtEmail'
    events={
        {
            onBlur : (e)=>{
                //console.log(e.target.value)
            }
        }
    }
/>
```