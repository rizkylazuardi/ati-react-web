## AtiModals
Modal is a dialog box/popup window that is displayed on top of the current page.

## Usage
You can use modal component as simple as the example below, depends on your need and the parameter 
```js
//import modal component, mandatory things you must do
import AtiModals from './AtiModals';
//import button component
import AtiButton from '../../button/AtiButton';
//import datepicker component
import AtiDatePicker from './../datepicker/AtiDatePicker';

    // Tag for component modal 
    <AtiModals 
        //header of modals (you can add anything inside it). for example text 
        header={<div><h5>Header</h5></div>} 

        //footer of modals (you can add anything inside it). for example component button
        footer={<AtiButton text='Hello Button'></AtiButton>}

        //add custom property 
        backdrop={boolean("backdrop",true)}
        zIndex={text("zIndex","1000")}
        contentClassName={select("contentClassName",['progressBar','backdropModals','backgroundModalClasName'],'progressBar')}
     >
        //content of modals, you can add anything inside tag <div></div>. for example component datepicker
        <div><AtiDatePicker/></div>
    </AtiModals>
```

Simple use 
```js
 <AtiModals  
            //header of modal
            header={<div><h5>Header</h5></div>} 
            //footer of modals
            footer={ <Button type="button" id="link" text="Exit" color="link"></Button>}/>
>
            //content of modals. Inside tag <div></div>
            <div><h6>Hello</h6></div>
</AtiModals>
```

