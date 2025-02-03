# AtiListCheckBox

## General

Base component that for use to help create checkbox element with dynamic options data that you 
can provide as Json Array object on parameter ```datasource ``` 
the ``` datasource ``` will be iterate and shown as a single checkbox that by default refer to```<AtiCheckbox /> ``` component.

## Example

### `default`

Example using default datasource :
```js
const dataSource = [
        {id:"chk1",value:'renang', label:'Renang'},
        {id:"chk2",value:'sepakbola', label:'Sepak Bola'},
        {id:"chk3",value:'volley', label:'Volley'},
        {id:"chk4",value:'ngoding', label:'Coding'},
    ];
```
```js
import AtiListCheckBox from './AtiListCheckBox';

const onItemChanged = (items)=>{
    //do something with the selected items here
    console.log(items);
}
<AtiListCheckBox label="Hobi"
    dataSource={dataSource}
    events={
        //json array object here : 
        {   onItemsChanged: onItemChanged,
            onChange: (e)=>{
                    console.log("hello "+e.target.value);
            }
        }
    }
/>
```