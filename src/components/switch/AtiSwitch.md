## AtiSwitch
Spinner is component for Switching Selector.

## When To Use
If you need to represent the switching between two states or on-off state.

The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.

## Usage
Customize Usage

You can customize switch component as simple as the example below, depends on your need and the properties 
```js
//import modal component, mandatory things you must do
import AtiSwitch from './AtiSwitch';

    // Tag for component switch 
    <AtiSwitch>
              unCheckedIconName={'cross'}
              checkedIconName={'check'}
              size={'default'}
              events={
                {
                    onChange:(e)=>{
                        console.log('tes')
                    },
                }
            }
       >
       </AtiSwitch>
```

Basic Usage
The most basic usage.
```js
import AtiSwitch from './AtiSwitch';

     <AtiSwitch/>
```


