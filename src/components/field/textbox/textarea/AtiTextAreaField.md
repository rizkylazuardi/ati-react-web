## AtiTextAreaField

## General
The `<TextArea />` components represents a multi-line plain-text editing control.

## Usage
You can use the textarea components like in the example below.

```js
//import textarea component, mandatory things you must do
import AtiTextAreaField from './AtiTextAreaField';

   //Tag for component textarea
  <AtiTextAreaField 

        //custom property for textarea
        id="address" 
        name="address"
        label="Address" 
        placeholder="Address" 
        readonly={true}
        rows = "5" 
        onChange ={(e)=>{console.log("test onChange");}}
        onBlur  ={(e)=>{console.log("test onBlur");}}
        disabled ={false}
        showError={true}
        readonly ={false}
    />
```

#### Simple use :
### `<AtiTextAreaField/>`

  
