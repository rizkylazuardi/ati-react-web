import React from 'react';
import {AtiDrawer} from 'ati-react-web';
import { Icon } from 'antd';

class DrawerComponent extends React.Component{
    state = {
        visible : false
    }

    render(){

        const showDrawer = () => {
            this.setState({
                visible: true,
            });
        };
        
        const onClose = () => {
            this.setState({
                visible: false,
            });
        };

        const style = {
            // height: 'calc(100% - 55px)',
            fontSize: 25,
            color: 'white',
            background : '#54a1b5'
            // border: '1px solid #000000',
        }
    
        return (
            <div>
                <button className = "btn" style = {style} onClick={showDrawer}>
                    <Icon type = "setting"></Icon>
                </button>

                <AtiDrawer
                    title = "Setting"
                    placement = "left"
                    closable = {true}
                    mask = {true}
                    maskClosable = {true}
                    visible = {this.state.visible}
                    // width = {number("width",500)}
                    // zIndex = {number("zIndex",1000)}
                    // style = {style}
                    // visible = {store.state.visible}
                    events={
                        {   
                            onClose : onClose
                        }
                    }
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </AtiDrawer>
            </div>
        )
    }
}

export default DrawerComponent;