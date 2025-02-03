# AtiDashboard

## General

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Base component that for use to help create Drawer you can provide as component `AtiDrawer`.
You can insert some element inside `AtiDrawer`. 

## Example

### `custom`

Example dashboard with custom format, 
```js

state = { visible: true };

const showDrawer = () => {
this.setState({
    visible: true,
});
};

const onClose = () => {
this.setState({
    visible: false,
});
};

<div>
    <button className = "btn btn-primary btn-sm" onClick={showDrawer}>
        Open
    </button>

    <AtiDrawer
        title = "Drawer"
        placement= "right" 
        closable = {true}
        mask = {true}
        maskClosable = {true}
        visible = {this.state.visible}
        width = {500}
        zIndex = {1000}
        style = {style}
        events={
            {   showDrawer:showDrawer,
                onClose : onClose
            }
        }
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </AtiDrawer>
</div>
             
```