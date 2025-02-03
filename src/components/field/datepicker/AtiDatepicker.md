# React-DatePicker

## General
Datepicker is a graphical user interface widget which allows the user to select a date from a calendar and/or time from a time range. The typical practice is to provide a text box field which, when clicked upon to enter a date, pops up a calendar next to or below the field, allowing the user to populate the field with an appropriate date, or provides a text box with an icon of a calendar such that when the icon is clicked on, the calendar (or time field) appears.It is highly customizable and it even allows to edit date's milliseconds.

## Usage
React.js and Moment.js are peer dependencies for react-datetime. These dependencies are not installed along with react-datetime automatically, but your project needs to have them installed in order to make the datepicker work. You can use the datepicker like in the example below.


```js
//Import component AtiDatePicker, is mandatory thing to do 
import AtiDatePicker from './AtiDatePicker';


// Default use, without any parameter
<AtiDatepicker/>


//Use the component, if you want to custom the component you can add parameter such example below
 <AtiDatePicker 
        showError={true} 
        events={
            {
                onChange:(e)=>{
                     console.log(e.target.value);
                },
                onFocus: (e) =>{
                    console.log(e.target.value);
                }, 
                onBlur: (e)=>{
                    console.log(e.target.value);
                }
            }
        }
        disableOnClickOutside ={true} 
        timeFormat={false}
        dateFormat="YYYY-DD-MM"
        input= {true}
        closeOnSelect={true}
        validDate = {isValidDate}
        placeholder="Input Date"
        readonly = {false}
      >
      </AtiDatePicker>
```
