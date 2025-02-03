# TextInputNumeric

## General

Component to create Text Input Numeric

## Example

### `Text Input Numeric`

```js
import {AtiTextInputNumeric} from 'atic-react-web';

const onItemsChanged = (e) =>{
            console.log(e.target.value);
        }

<AtiTextInputNumeric id = "currency" name = "currency" label = "Input Number"
            scale = {10} precision = {5} className = "text-input-numeric-custom" thousandSeparator = {true}
    events = {
        {
            onItemsChanged : onItemsChanged
        }
    }    
/>
```

### `With Prefix`

```js
import {AtiTextInputNumeric} from 'atic-react-web';

const onItemsChanged = (e) =>{
            console.log(e.target.value);
        }

<AtiTextInputNumeric id = "currency" name = "currency" label = "Input Number"
            className = "text-input-numeric-custom" thousandSeparator = {true} prefix = "$"
            suffix = ",-"

    events = {
        {
            onItemsChanged : onItemsChanged
        }
    }    
/>
```

### `Credit Card Format`

```js
import {AtiTextInputNumeric} from 'atic-react-web';

const onItemsChanged = (e) =>{
            console.log(e.target.value);
        }

<AtiTextInputNumeric id = "currency" name = "currency" label = "Input Number"
            className = "text-input-numeric-custom" 
            format="#### #### #### ####"
    events = {
        {
            onItemsChanged : onItemsChanged
        }
    }    
/>
```

### `Credit Card Format With Mask`

```js
import {AtiTextInputNumeric} from 'atic-react-web';

const onItemsChanged = (e) =>{
            console.log(e.target.value);
        }

<AtiTextInputNumeric id = "currency" name = "currency" label = "Input Number"
            className = "text-input-numeric-custom" 
            format="#### #### #### ####" mask="_"
    events = {
        {
            onItemsChanged : onItemsChanged
        }
    }    
/>
```

### `Format With Mask as Array`

```js
import {AtiTextInputNumeric} from 'atic-react-web';

const onItemsChanged = (e) =>{
            console.log(e.target.value);
        }

<AtiTextInputNumeric id = "currency" name = "currency" label = "Input Number"
            className = "text-input-numeric-custom" 
            format="##/##" placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']}
    events = {
        {
            onItemsChanged : onItemsChanged
        }
    }    
/>
```

### `Date Format With Mask`

```js
import {AtiTextInputNumeric} from 'atic-react-web';

const onItemsChanged = (e) =>{
            console.log(e.target.value);
        }

const limit = (val, max) => {
    if (val.length === 1 && val[0] > max[0]) {
        val = '0' + val;
    }
    
    if (val.length === 2) {
        if (Number(val) === 0) {
        val = '01';
    
        //this can happen when user paste number
    } else if (val > max) {
        val = max;
        }
    }
    
    return val;
    }
    
    const cardExpiry = (val) => {
    let month = limit(val.substring(0, 2), '12');
    let year = val.substring(2, 4);
    
    return month + (year.length ? '/' + year : '');
    }


    <AtiTextInputNumeric id = "currency" name = "currency" label = "Input Number"
                className = "text-input-numeric-custom"  
                format = {cardExpiry}
        events = {
            {
                onItemsChanged : onItemsChanged
            }
        }    
    />
```

### `Phone Number Format`

```js
import {AtiTextInputNumeric} from 'atic-react-web';

const onItemsChanged = (e) =>{
            console.log(e.target.value);
        }

<AtiTextInputNumeric id = "currency" name = "currency" label = "Input Number"
            className = "text-input-numeric-custom"  
            format="+1 (###) ###-####" mask="_"
    events = {
        {
            onItemsChanged : onItemsChanged
        }
    }    
/>
```

## Properties
| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| id | element id of textbox | string | - | True |
| name | element name of textbox | String | - | True |
| label | textbox label | String, React.Node | - | - |
| className | textbox additional / custom css class name | String | - | - |
| prefix | prefix | String | - | - |
| suffix | suffix | String | - | - |
| format | format | String | - | - |
| placeholder | placeholder text | String | - | - |
| displayType | display type. can choose text or input | `input`,`text` | - | - |
| thousandSeparator | Thousand Seperator can either be true or any string value | Bolean,String | - | - |
| precision | precision | Number | - | - |
| scale | scale | Number | - | - |
| required | scale | Number | Bolean | - |
| renderText | render text | String, React.Node | - | - |
| events | confirmation events : onChange(e), onValueChange(value,e) | Function | - | - |