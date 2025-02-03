## AtiCard
A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## Usage
You can use modal component as simple as the example below, depends on your need and the parameter 
```js
//import modal component, mandatory things you must do
import AtiCard from './AtiCard';
//import button component for sample purpose
import AtiButton from '../../button/AtiButton';

    // Tag for component AtiCard 
    <AtiCard 
        //title of card (you can add anything inside it). for example text 
        cardTitle="Card Title"
        //Content to render in the top-right corner of the card (you can add anything inside it). for example component button
        extraElement={<AtiButton text='Hello Button'></AtiButton>}
        //content of the card (you can add anything inside it). for example Paragraph
        content={<p>Card Content</p>}
        //if you want card to be hoverable
        hoverable
     />
```

Simple use 
```js
    // Tag for component AtiCard 
    <AtiCard 
        //title of card (you can add anything inside it). for example text 
        cardTitle="Card Title"
        //content of the card (you can add anything inside it). for example Paragraph
        content={<p>Card Content</p>}
     />
```

