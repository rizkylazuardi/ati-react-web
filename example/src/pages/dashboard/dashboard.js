import React from 'react';
import {AtiDashboard, AtiDashboardItem} from 'ati-react-web'
import Greeting from './component/Greeting';
import ChartBar from './component/ChartBar';
import './style.css';

class Dashboard extends React.Component{

render(){
    var layouts = {lg: [
        {i:'1', x: 0, y: 0, w: 10, h: 2, static: true},
        {i:'2',x: 11, y: 0, w: 10, h: 2, static: true},
        {i:'3',x: 22, y: 0, w: 10, h: 2, static: true},
        {i:'4',x: 33, y: 0, w: 10, h: 2, static: true},
        {i:'5',x: 0, y: 2, w: 32, h: 6},
        {i:'6',x: 33, y: 2, w: 10, h: 6},
        {i:'7',x: 0, y: 8, w: 21, h: 6},
        {i:'8',x: 22, y: 8, w: 21, h: 6}
      ]};
    return(
            <div style = {{backgroundColor : "#f0f0f8"}}>
                <Greeting/>

                <div style = {{padding : '10px'}}>
                    <AtiDashboard
                        // breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                        cols = {{lg: 50, md:43, sm: 43, xs: 43, xxs: 43}}
                        isResizable = {true}
                        isDraggable = {true}
                        layouts = {layouts}
                        rowHeight = {40}
                        preventCollision = {true}
                        // preventCollision = {boolean("preventCollision", false)}
                        // autoSize = {true}
                    >
                        <AtiDashboardItem key = "1">
                            <div className = "dashboard-item shadow" style = {{backgroundColor : "#80c7fd"}}>
                                test
                            </div>
                        </AtiDashboardItem>
                        <AtiDashboardItem key = "2">
                            <div className = "dashboard-item shadow" style = {{backgroundColor : "#7ebfdb"}}>
                                test
                            </div>
                        </AtiDashboardItem>
                        <AtiDashboardItem key = "3">
                            <div className = "dashboard-item shadow" style = {{backgroundColor : "#87a8b7"}}>
                                test
                            </div>
                        </AtiDashboardItem>
                        <AtiDashboardItem key = "4">
                            <div className = "dashboard-item shadow" style = {{backgroundColor : "#c1a4de"}}>
                                test
                            </div>
                        </AtiDashboardItem>
                        <AtiDashboardItem key = "5">
                             <div className = "dashboard-item gray-border" style = {{backgroundColor : "#ffffff", paddingLeft : '20px',paddingTop : '5px', color : 'grey'}}>
                                <p style = {{fontSize : '2vw'}}><b>Report User Registration</b></p>
                                <ChartBar />
                            </div>
                        </AtiDashboardItem>
                        <AtiDashboardItem key = "6">
                            <div className = "dashboard-item gray-border" style = {{backgroundColor : "#ffffff"}}>
                                test
                            </div>
                        </AtiDashboardItem>
                        <AtiDashboardItem key = "7">
                            <div className = "dashboard-item gray-border" style = {{backgroundColor : "#ffffff"}}>
                                test
                            </div>
                        </AtiDashboardItem>
                        <AtiDashboardItem key = "8">
                            <div className = "dashboard-item gray-border" style = {{backgroundColor : "#ffffff"}}>
                                test
                            </div>
                        </AtiDashboardItem>
                    </AtiDashboard> 
                </div>
            </div>  
    )
}
}

export default Dashboard;