# AtiRadioButton

## General

Base component that for use to help create radio button with dynamic options data that you 
can provide as Json Array object on parameter `data` 
the `data` will be iterate and shown as a single checkbox that by default refer to  [Reactstrap Input](http://reactstrap.github.io/components/form/) component 

## Example

### `default`

Example using default datasource, 
use `label` key for checkbox label/text , `value` key for checkbox value, 
` disabled ` key for indicate the radio button is disabled or not
```js
const dataSource = [
    {id: "id1",label:"Reguler",value:"R",disabled:true},
    {id: "id2",label:"Premium",value:"P"},
    {id: "id3",label:"VIP",value:"V"},
    {id: "id4",label:"Khusus",value:"K"},
];
const onItemChanged = (items,e)=>{
    //do something with the selected items here
    console.log(items);
}
<AtiRadioButton label="Jalur" name="jalur"
    data={dataSource}
    events={
        {onItemChanged:onItemChanged}
    }
></AtiRadioButton>
```
### `Custom DataSource`
Example using custom datasource, 
you can only change the key `label` and `value` with anything key, but the `id` and `disabled` attribute cannot be changed

** Note : ** 
you must add `labelKey` and `valueKey` attribute to mapping the datasource with the radio button element
```js
const dataSource = [
    {id: "id1",myText:"Reguler",myValue:"R",disabled:true},
    {id: "id2",myText:"Premium",myValue:"P"},
    {id: "id3",myText:"VIP",myValue:"V"},
    {id: "id4",myText:"Khusus",myValue:"K"},
];
const onItemChanged = (items,e)=>{
    //do something with the selected items here
    console.log(items);
}
<AtiRadioButton label="Jalur" name="jalur" labelKey="myText" valueKey="myValue"
    data={dataSource}
    events={
        {onItemChanged:onItemChanged}
    }
></AtiRadioButton>
```