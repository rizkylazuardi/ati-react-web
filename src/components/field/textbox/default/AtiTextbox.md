# AtiTextbox

## General

Base component that for use to help create text-based input components.
this component is instead of [Reactstrap Input](http://reactstrap.github.io/components/form/).
the component is available to be set as valid or invalid state, just set the attribute showError=true to set element Input as error warning (red), set showError=false to make the input element = valid(green)

## Example

### `Sample Default (no validation)`
remove the attribute `showError` from AtiTextBox component
```js
<AtiTextbox id="email" name="email"
    type="text" 
    label="Email Address" 
    placeholder="Input Email Here" 
    size="sm"
/>
```

### `Sample Input Valid`

```js
<AtiTextbox id="email" name="email"
    type="text" 
    label="Email Address" 
    placeholder="Input Email Here" 
    size="sm"
    showError={true}
/>
```


### `Sample Input Invalid`

```js
<AtiTextbox id="email" name="email"
    type="text" 
    label="Email Address" 
    placeholder="Input Email Here" 
    size="sm"
    showError={false}
/>
```

## Properties

| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| id | element id of textbox | string | - | True |
| name | element name of textbox | String | - | True |
| type | element type of textbox (text,password,email) | String | - | True |
| label | textbox label | String | - | - |
| className | textbox additional / custom css class name | String | - | - |
| size | element size (sm, lg, md (default) ) | String | - | - |
| value | text value of textbox | String | - | - |
| inputLength | textbox minimum and maximal length, use json object (example : inputLength={{min:5,max:10}}) | Object | - | - |
| showError | flag to indicate the textfield is valid or not (true=valid,false=invalid,blank=not yet validate) | Bolean | - | - |
| events | confirmation events : onChange, onBlur, onKeyUp | Function | - | - |
```