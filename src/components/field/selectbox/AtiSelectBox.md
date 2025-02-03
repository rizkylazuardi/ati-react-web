# AtiSelectBox

## General

Base component that for use to help create select box element with dynamic options data that you 
can provide as Json Array object on parameter `data`
the ` data` will be iterate and shown as a single `<option>` that the value and label will be provide 
from attribute `data`

## Example

### `default`

Example using default data format, 
use `label` key for checkbox label/text , `value` key for checkbox value, 

```js
const dataSource = [
        { name: 'USD', desc: 'USD' },
        { name: 'IDR', desc: 'IDR' },
        { name: 'SGD', desc: 'SGD' },
];
const onItemChanged = (items,e)=>{
    //do something with the selected items here
    console.log(items);
}
<AtiSelectBox id="mataUang" name="mataUang" 
            label="Mata Uang" placeholder="Pilih mata uang .."
            data={datasourceKnob}
            events={
                {onItemChanged:onItemChanged
                }
            }
            value={store.state.value}
            searchable={true}
            clearable={true}
            showSpinner={false}
            disabled={false}
            multi={false}
            noResultsText={"data not found"}
        ></AtiSelectBox>
```

### `Custom DataSource`
Example using custom datasource, 
** Note : ** 
you must add `labelKey` and `valueKey` attribute to mapping the datasource with the radio button element
```js
const dataSource = [
    {myText:"Reguler",myValue:"R"},
    {myText:"Premium",myValue:"P"},
    {myText:"VIP",myValue:"V"},
    {myText:"Khusus",myValue:"K"},
];
const onItemChanged = (items)=>{
    console.log(items);
}
<AtiSelectBox id="mataUang" name="mataUang" 
            label="Mata Uang" placeholder="Pilih mata uang .."
            data={datasourceKnob}
            events={
                {onItemChanged:onItemChanged
                }
            }
            value={store.state.value}
            labelKey="myText" valueKey="myValue" 
            multi={false}
            noResultsText={"data not found"}
        ></AtiSelectBox>
```

## Properties
| Property | Description | Type | Default | Required |
| -------- | ----------- | ---- | ------- | -------- |
| id | element id of SelectBox | string | - | True |
| name | element name of SelectBox | String | - | True |
| label | SelectBox label | String | - | - |
| className | SelectBox additional/custom css class name | String | - | - |
| data | object(json) that will store as <option> list, default format using "label" and "value attribute" => {label:"myLabel",value:"myValue"} | Array | - | - |
| disabled | flag that indicate the selectbox component is disabled or not | Bolean | - | - |
| showSpinner | flag that indicate the spinner is shown or not | Bolean | - | - |
| noResultText | contain text that will be show when search result data was not found | String | - | - |
| multi | flag that indicate the selectbox cal be multiple choise or not | Bolean | - | - |
| labelKey | key of object on variable data that will be mapped as selectbox option label | String | - | - |
| valueKey | key of object on variable data that will be mapped as selectbox option value | String | - | - |
| searchable | flag that indicate the searchbox component have a data search fitur or not | Bolean | - | - |
| clearable | flag that indicate the option item of selectbox can be clear or not | Bolean | - | - |
| value | Value of selectbox | String | - | - |
| events | confirmation events : onItemChanged(e) | Function | - | - |