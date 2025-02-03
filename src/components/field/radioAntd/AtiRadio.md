# AtiRadio

## When to use
 - Used to select a single state in multiple options.

 - The difference between Select is that Radio is visible to user and can facilitate the comparison of choice, which makes there shouldn't be too many of them.


## Example

### `Group`

```js
import AtiRadio from './AtiRadio';
import AtiRadioItem from './AtiRadioItem';
import {Button, Input} from 'antd';

state = {
    value : 1
}

const onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
        value: e.target.value,
    });
}


<AtiRadio 
    name = "radio-group"
    value = {this.state.value} 
    events={
        {onChange:onChange}
    }
>
    <AtiRadioItem value = {1}>A</AtiRadioItem>
    <AtiRadioItem value = {2}>B</AtiRadioItem>
    <AtiRadioItem value = {3}>C</AtiRadioItem>
    <AtiRadioItem value = {4}>D</AtiRadioItem>
</AtiRadio>

```
### `Solid Size`

```js
import AtiRadio from './AtiRadio';
import AtiRadioItem from './AtiRadioItem';
import {Button, Input} from 'antd';

state = {
    value1 : null,
    value2 : null
}

const onChange1 = (e) => {
    console.log('radio checked', e.target.value);
    store.set({
        value1: e.target.value,
    });
}

const onChange2 = (e) => {
    console.log('radio checked', e.target.value);
    store.set({
        value2: e.target.value,
    });
}

<div>
    <div>
        <AtiRadio 
            name = "radio-group"
            value = {this.state.value1} 
            buttonStyle = "solid"
            size= "small" 
            events={
                {onChange:onChange1}
            }
        >
            <AtiRadioButtonItem value = {1}>Huangzhou</AtiRadioButtonItem>
            <AtiRadioButtonItem value = {2}>Jakarta</AtiRadioButtonItem>
            <AtiRadioButtonItem value = {3}>Japan</AtiRadioButtonItem>
            <AtiRadioButtonItem value = {4}>New Zealand</AtiRadioButtonItem>
        </AtiRadio>
    </div>
    <div style = {{marginTop : 16}}>
        <AtiRadio 
            name = "radio-group2"
            value = {this.state.value2} 
            buttonStyle = "solid"
            size = "large"
            events={
                {onChange:onChange2}
            }
        >
            <AtiRadioButtonItem value = {5} disabled>Huangzhou</AtiRadioButtonItem>
            <AtiRadioButtonItem value = {6}>Jakarta</AtiRadioButtonItem>
            <AtiRadioButtonItem value = {7}>Japan</AtiRadioButtonItem>
            <AtiRadioButtonItem value = {8}>New Zealand</AtiRadioButtonItem>
        </AtiRadio>
    </div>
</div>
```

### `Disabled`

```js
import AtiRadio from './AtiRadio';
import AtiRadioItem from './AtiRadioItem';
import {Button, Input} from 'antd';

state = {
    value : 1,
    disabled : true
}

const onChange = (e) => {
    console.log('radio checked', e.target.value);
    store.set({
        value: e.target.value,
    });
}

const toggleDisabled = () => {
    store.set({
        disabled: !this.state.disabled,
    });
    }

    <div>
        <AtiRadio 
            name = "radio-group"
            value = {this.state.value} 
            events={
                {onChange:onChange}
            }
            disabled = {this.state.disabled}
        >
            <AtiRadioItem value = {1}>A</AtiRadioItem>
            <AtiRadioItem value = {2}>B</AtiRadioItem>
            <AtiRadioItem value = {3}>C</AtiRadioItem>
            <AtiRadioItem value = {4}>D</AtiRadioItem>
        </AtiRadio>
        <br/>
        <Button
            type = "primary"
            onClick = {toggleDisabled}
        >
        Toggle disabled
        </Button>
    </div>

```

### `Vertical`

```js
import AtiRadio from './AtiRadio';
import AtiRadioItem from './AtiRadioItem';
import {Button, Input} from 'antd';

state = {
    value : null,
    valueMore : ''
}

const onChange = (e) => {
    console.log('radio checked', e.target.value);
    store.set({
        value: e.target.value,
    });
}

const handleOnChange = (e) => {
    console.log('value input = ', e.target.value);
    store.set({
        valueMore : e.target.value,
    })
}

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    };


<AtiRadio 
    name = "radio-group"
    value = {this.state.value} 
    events={
        {onChange:onChange}
    }
>
    <AtiRadioItem value = {1} style = {radioStyle}>A</AtiRadioItem>
    <AtiRadioItem value = {2} style = {radioStyle}>B</AtiRadioItem>
    <AtiRadioItem value = {3} style = {radioStyle}>C</AtiRadioItem>
    <AtiRadioItem value = {4} style = {radioStyle}>
        More...
        {this.state.value === 4 ? <Input value = {this.state.valueMore} onChange = {handleOnChange} style={{ width: 100, marginLeft: 10 }} /> : null }    
    </AtiRadioItem>
</AtiRadio>
```
