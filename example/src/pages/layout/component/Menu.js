import React, {Component} from 'react'
import {AtiSideMenu} from 'ati-react-web'

class Menu extends Component {

    render(){
        const {dataSource} = this.props;
        return(
            <AtiSideMenu
                    mode='inline'
                    theme= "dark"
                    defaultOpenKeys={['sub-1']}
                    defaultSelectedKeys={['sub-1-item-1']}
                    dataSource={dataSource}
                />
        );
    }
}

export default Menu;