## AtiBadge
Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## Usage
You can use badge component as simple as the example below, depends on your need and the parameter 
```js
//import badge number component if you want badge with counter, mandatory things you must do
import AtiBadgeNumber from './AtiBadgeNumber';

    // Tag for component AtiCard 
    <AtiBadgeNumber 
        //number that will show in the badge
        count={9}
        //Text that will appear when you hover the badge
        title="Badge Title"
        //set true if you want to show zero value
        showZero=false
        //set max count for the badge. if count more than overflowCount, then number will show +
        overflowCount=99
        //set offset of the badge dot
        offset=[]
     />
```

```js
//import badge dot component if you want badge without counter, mandatory things you must do
import AtiBadgeDot from './AtiBadgeDot';

    // Tag for component AtiCard 
    <AtiBadgeDot 
        //status represent color of the badge
        status="success"
        //Text that will appear when you hover the badge
        title="Badge Title"
        //If status is set, text sets the display text of the status dot
        text="Success"
        //set offset of the badge dot
        offset=[]
     />
```


