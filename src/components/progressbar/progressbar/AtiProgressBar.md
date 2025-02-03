## React- Progress Bar
A progress bar can be used to show a user how far along he/she is in a process.React provides several types of progress bars, such as percentage, range, infinite display.Types is mandatory parameters to be included and filled the value. 

## Usage  
You can create the Progress Bar components like in the example below.

```js
//import progress bar component, mandatory things you must do
import AtiProgressBar from './AtiProgressBar'

    //Tag for component single progress bar 
    <AtiProgressBar 

        //add custom property, here

        //type of progress bar, there are :
        //- "range" : will display progress bar with 2 parameter value and maxValue. for example progress 10 of 100
        //- "percentage" : also will display progess bar with 2 parameter value and maxValue. for example 25%
        //- "infinite" :  which will "load" forever. Simply run it and finish in your callback
        type="range" 
        className ="progressBar" 
        value={50} 
        maxValues={100} 
        color="info"/>

```
### Simple Use
`<AtiProgressBar/>`

``