import React from 'react';
import {AtiTabsGroup} from 'ati-react-web';
import ListPendingTask from './ListPendingTask';

class Tabs extends React.Component{
    render() {
        const dataSource = [
            { title: 'Pending Task', key: '1', tabContent:<ListPendingTask /> },
            { title: 'Complete Task', key: '2', tabContent:<span>This Tab 2 Content</span> },
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