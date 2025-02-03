# AtiBarChart

## General

A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.

## When To Use

If you have comparative data that you would like to represent through a chart then a bar chart would be the best option. This type of chart is one of the more familiar options as it is easy to interpret. These charts are useful for displaying data that is classified into nominal or odinal categories

## Example

### `Sample Default`
```js
const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  const dataBar = [
    {name: 'Ultra Violet', key:'uv',fill:'#8884d8'},
    {name: 'People Virst', key:'pv', fill: '#82ca9d'},
    {name: 'Amnesty', key:'amt', fill: '#a1f442'}
  ];
        
    <AtiBarChart
            dataSource={data}
            dataBar={dataBar}
            width={600}
            height={300}
        />
        
```

### `Stacked Chart`
just set the attribute bordered to `false`
```js
const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];
  const dataBar = [
    {name: 'Ultra Violet', key:'uv',fill:'#8884d8'},
    {name: 'People Virst', key:'pv', fill: '#82ca9d', stackId:'a'},
    {name: 'Amnesty', key:'amt', fill: '#a1f442', stackId:'a'}
  ];
        
    <AtiBarChart
            dataSource={data}
            dataBar={dataBar}
            width={600}
            height={300}
        />
```

### dataBar

| Property | Description | Type | Default |
| -------- | ----------- | ---- | ------- |
| name | The name of data. This option will be used in tooltip and legend to represent a bar | String | - |
| key | The key of a group of data which should be unique in an area chart | String | - |
| fill | fill the bar with color code | String | - |
| stackId | The stack id of bar, when two bars have the same value axis and same stackId, then the two bars are stacked in order | String | - |
| label | f false set, labels will not be drawn. If true set, labels will be drawn which have the props calculated internally. If object set, labels will be drawn which have the props mergered by the internal calculated props and the option. If ReactElement set, the option can be the custom label element. If set a function, the function will be called to render customized label | boolean | false |
| stackId | The type of icon in legend. If set to 'none', no legend item will be rendered: `line` `square` `rect` `circle` `cross` `diamond` `square` `star` `triangle` `wye` `none` | String | `rect` |