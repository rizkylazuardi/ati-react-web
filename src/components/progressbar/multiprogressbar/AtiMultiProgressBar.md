## React - Multi Progress Bar
Progress bar that can show two or more process on once display.

## Usage
You can create Multi Progress Bar custom components like in the example below.
```js
//import multi progress bar component, mandatory things you must do
import AtiMultiProgressBar from './AtiMultiProgressBar';

//tag for component multi progess bar
<AtiMultiProgressBar>
    //component progress bar that will display, on once process. You can free custome, as much as your need
    <AtiProgressBar asBar={true} color="danger" type="range" value={80} maxValues={100}/>
    <AtiProgressBar asBar={true} color="info" type="range" value={20} maxValues={100}/>                   
</AtiMultiProgressBar>

```

#### Simple use :
```js
<AtiMultiProgressBar>
    <AtiProgressBar/>
    <AtiProgressBar/>
</AtiMultiProgressBar>```

