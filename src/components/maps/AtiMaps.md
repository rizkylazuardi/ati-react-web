---
category: Components
type: Data Display
title: Maps
---

Maps Component.

## When To Use

- When you need a map to show location.
- When a series of information needs to be visualized in map.


## API

### `default`
```js
<AtiMaps
    apiKey='AIzaSyACnLUdisPBbBHbE3Iyx8FgqWo1DqFb_Sw'
    center={{lat:-6.255574,lng:106.619905}}
/>
```

### `with child`
```js
const ExampleComponent = ({ text }) => (
    <div style={{
        color: 'white', 
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
        }}>
            {text}
    </div>
);

const dataThatWillBeRendered = [
    {key: '1', title: 'Graha Anabatic',withInfoWindow: false,position:{lat:-6.255574,lng:106.619905}},
    {key: '2', title: 'Anak Panah Cyberschool',position:{lat:-6.257157,lng:106.619088}},
    {key: '3', title: 'Summarecon Mal Serpong',withInfoWindow: true,position:{lat:-6.241174,lng:106.628361}},
];

const renderData = () =>{
    return dataThatWillBeRendered.map((item, i) => {
        return (
            <ExampleComponent
                key={item.key}
                lat={item.position.lat}
                lng={item.position.lng}
                text={item.title}/>
        );
    });
}

<AtiMaps
    childs={renderData()}
    apiKey='AIzaSyACnLUdisPBbBHbE3Iyx8FgqWo1DqFb_Sw'
    center={{lat:-6.255574,lng:106.619905}}
/>
```