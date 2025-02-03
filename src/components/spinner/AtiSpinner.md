## AtiSpinner
Spinner is component for displaying loading state of a page or a section.

## When To Use
When part of the page is waiting for asynchronous data or during a rendering process, an appropriate loading animation can effectively alleviate users' inquietude.

## Usage
Customize Usage

You can customize spinner component as simple as the example below, depends on your need and the properties 
```js
//import modal component, mandatory things you must do
import AtiSpinner from './AtiSpinner';

    // Tag for component spinner 
    <AtiSpinner>
        size={"large"}
        iconName={"loading"}
        wrapperClassName={"wrapperClassNameGrey"}
        tip={"Loading..."}
        delay={20}
        spinning={true}>
        <p>TEST</p>
    </AtiSpinner>
```

Basic Usage
A simple loading status.
```js
import AtiSpinner from './AtiSpinner';

    <AtiSpinner spin={true}>
        <p>TEST</p>
    </AtiSpinner>  
```
