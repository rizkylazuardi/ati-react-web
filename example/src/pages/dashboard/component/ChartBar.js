import React from 'react';
import {AtiBarChart} from 'ati-react-web';

class ChartBar extends React.Component{
    render(){
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
        {name: 'Ultra Violet', key:'uv',fill:'#8884d8', legendType:'square'},
        {name: 'People Virst', key:'pv', fill: '#82ca9d', stackId:'a'},
        {name: 'Amnesty', key:'amt', fill: '#a1f442', stackId:'a'}
      ];
        return(
            <AtiBarChart
                dataSource={data}
                dataBar={dataBar}
                width= '90%'
                height= '75%'
                reverseStackOrder={false}
                margin = {{ top: 0, right: 5, bottom: 5, left: 0 }}
            />
        )
    }
}

export default ChartBar;