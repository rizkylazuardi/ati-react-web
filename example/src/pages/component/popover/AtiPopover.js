import React from 'react';
import {AtiPopover} from 'ati-react-web';
import { Layout, Icon } from 'antd';
import Tabs from './../tabs/Tabs';

class Popover extends React.Component{

    render(){
        const placements={
            top:'top',
            left:'left',
            right:'right',
            bottom:'bottom',
            topLeft:'topLeft',
            topRight:'topRight',
            bottomLeft:'bottomLeft',
            bottomRight:'bottomRight',
            leftTop:'leftTop',
            leftBottom:'leftBottom',
            rightTop:'rightTop',
            rightBottom:'rightBottom',
        }

        const triggers={
            hover:'hover',
            click:'click',
            focus:'focus',
            contextMenu:'contextMenu',
        }

        return (
            <AtiPopover 
                // visibleOnLoad={true}
                // arrowPointAtCenter={false}
                autoAdjustOverflow={true}
                content={this.props.content}
                // mouseLeaveDelay={0}
                // mouseEnterDelay={0.1}
                trigger='click'
                placement='bottomRight'
                childern={this.props.children}
            />
        )
    }
}

export default Popover;
