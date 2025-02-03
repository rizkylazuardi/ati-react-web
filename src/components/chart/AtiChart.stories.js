import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, object } from '@storybook/addon-knobs/react'
import AtiBarChart from './AtiBarChart'
import AtiPieChart from './AtiPieChart'
import { withReadme } from 'storybook-readme'
import AtiChartMd from './AtiChart.md'

storiesOf('Chart', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiChartMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('BarChart', AtiBarChart, null, () => {
    const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
    ]
    const dataBar = [
      {name: 'Ultra Violet', key: 'uv', fill: '#8884d8', legendType: 'square'},
      {name: 'People Virst', key: 'pv', fill: '#82ca9d', stackId: 'a'},
      {name: 'Amnesty', key: 'amt', fill: '#a1f442', stackId: 'a'}
    ]
    return (
      <AtiBarChart
        dataSource={object('data', data)}
        dataBar={object('bar', dataBar)}
        width={number('width', 600)}
        height={number('height', 300)}
        reverseStackOrder={boolean('reverseStackOrder', false)}
      />
    )
  }
  ).addWithDoc('PieChart', AtiPieChart, null, () => {
    const data = [
      {key: '0', name: 'Group A', value: 400, color: '#0088FE'},
      {key: '1', name: 'Group B', value: 300, color: '#00C49F'},
      {key: '2', name: 'Group C', value: 300, color: '#FFBB28'},
      {key: '3', name: 'Group D', value: 200, color: '#FF8042'}
    ]
    return (
      <AtiPieChart
        dataSource={object('data', data)}
        width={number('width', 800)}
        height={number('height', 400)}
      />
    )
  }
  )
