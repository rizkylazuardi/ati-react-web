# AtiTimePicker

## General

By clicking the input box, you can select a time from a popup panel. In this example, text state will
contain time value.

## Example

### `default`

Example timepicker with default format, 
```js

state = { value: null, text: null };

const onChange = (time, timeString) => {
    console.log(time, timeString);
    this.setState({ value: time, text : timeString });
}

<div>
    <AtiTimePicker
        placeholder = "Select Time"
        size= "large"
        disabled = {false}
        format = "HH:mm" //default : "HH:mm:ss"
        minuteStep = {15}
        secondStep = {30}
        use12Hours = {true}
        value = {this.state.value}
        events={
                {   
                    onChange : onChange
                }
        }
    />
    <p>{this.state.text} </p>
</div>
             
```

Simple Use
```js

<AtiTimePicker
    placeholder = "Select Time"
    size= "large"
    value = {this.state.value}
    events={
            {   
                onChange : onChange
            }
    }
/>
             
```