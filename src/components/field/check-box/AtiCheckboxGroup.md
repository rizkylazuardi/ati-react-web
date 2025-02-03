# AtiListCheckBox

## General

Base component that for use to help create checkbox element with dynamic options data that you 
can provide as Json Array object on parameter ```datasource ``` 
the ``` datasource ``` will be iterate and shown as a single checkbox that by default refer to```<AtiCheckbox /> ``` component.

## Example

### `default AtiCheckbox`

Example using default checkbox :
```js
    <AtiCheckbox
        checked = {true}
    >
        Checkbox
    </AtiCheckbox>
```

### `default AtiCheckboxGroup`

Example using default datasource :
```js

state = {
    checked : false
}
const onChange = (e) => {
    store.set({checked : !this.state.checked});
    console.log(this.state.checked);
}

<div>
    <AtiCheckbox 
        events={{onChange: onChange}} 
        checked = {this.state.checked}
        // autoFocus = {true}
    >
        Checkbox
    </AtiCheckbox>
</div>

```

### `CheckboxGroup`

```js

state = {
    currentData:['Apple']
}

const plainOptions = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
    
const onChange = (data) => {
    store.set({currentData:JSON.stringify(data)});
}

const datasourceKnob = object("dataSource", plainOptions, null);

<div>
    <AtiCheckboxGroup 
        dataSource={datasourceKnob} 
        defaultValue={this.state.currentData} 
        events={{onChange: onChange}} 
    />
    <br/>
    Checkbox Current Data : {store.state.currentData}

</div>
```

### `Checkbox Check All`

```js

state = {
    checkedList: ['Apple','Pear'],
    checkAll: false,
    indeterminate: true
}

const plainOptions = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
    
const onChange = (checkedList) => {
    console.log(checkedList)
    this.setState({
        checkedList,
        indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
        checkAll: checkedList.length === plainOptions.length,
        });
}
const onCheckAllChange = (e) => {
    this.setState({
        checkedList: e.target.checked 
                    ? plainOptions.map((item,index)=> {
                        return item.value;
                    }) 
                    : [],
        indeterminate: false,
        checkAll: e.target.checked,
    });
    }

const datasourceKnob = object("dataSource", plainOptions, null);

    <div>
        <AtiCheckbox
            events={
                {
                    onChange : onCheckAllChange
                }
            }
            indeterminate={this.state.indeterminate}
            checked={this.state.checkAll}
        >
        Check All
        </AtiCheckbox>
        <AtiCheckboxGroup 
            dataSource={plainOptions} 
            value={store.state.checkedList} 
            events={{onChange: onChange}} 
        />     

        <br/>
        Checkbox Current Data : {JSON.stringify(store.state.checkedList)}

    </div>
```