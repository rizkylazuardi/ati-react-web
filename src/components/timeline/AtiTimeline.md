---
category: Components
type: Data Display
title: Timeline
---

Vertical display timeline.

## When To Use

- When a series of information needs to be ordered by time (ascend or descend).
- When you need a timeline to make a visual connection.

## API

```js
const datas = [
    { key:1, color: 'green', dot: null, text:'Technical testing 2015-09-01'},
    { key:2, color: 'red', dot: null, text:'testing 2015-09-01'},
    { key:3, color: 'blue', dot: null, text:'Technical 2015-09-01'},
    { key:4, color: 'blue', dot: '<Icon type="clock-circle-o"/>', text:'2015-09-01'},
];

<AtiTimeline dataSource={datas}/>
```