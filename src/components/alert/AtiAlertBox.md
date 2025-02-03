# AtiAlertBox

## General

Base component that for use to help create AlertBox element instead of bootstrap Alert , 
check [Reactstrap Alert](http://reactstrap.github.io/components/alerts/)
the option style you can use attribute color : primary, secondary, succcess, danger, warning, info, light, dark
but you can customize button style with your css class name, just add your class to attribute className of AtiAlertBox.


## Example

### `default`

```js
state ={
    isAlertOpen:true
}

onToggleFunc = ()=>{
    this.setState({isAlertOpen:false});
}

<AtiAlertBox  id="alert-id"
    color="success" 
    isOpen={this.state.isAlertOpen} 
    onToggle={this.onToggleFunc} 
    closable 
    message="Transaction Success !">
</AtiAlertBox>
```