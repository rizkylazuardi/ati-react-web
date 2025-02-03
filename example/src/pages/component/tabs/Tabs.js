import React from 'react';
import {AtiTabsGroup} from 'ati-react-web';
import AtiList from './../list/list';

class Tabs extends React.Component{
    render() {
        const dataSource = [
            { title: 'Tab 1', key: '1', tabContent:<AtiList /> },
            { title: 'Tab 2', key: '2', tabContent:<span>This Tab 2 Content</span> },
            { title: 'Tab 3', key: '3', tabContent:<span>This Tab 3 Content</span> },
       ];

        return (
            <AtiTabsGroup
                // activeKey={select("activeKey", dataSource.map((item, i) => {return item.key}), '2')}
                defaultActiveKey = "1"
                type = "card"
                dataSource = {dataSource}
            >
            </AtiTabsGroup>
        )
    }
}

export default Tabs;