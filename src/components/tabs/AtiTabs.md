# AtiTabsGroup

## General

Base component that for use to help create Tabs element with dynamic Tab Pane that you 
can provide as Json Array object on parameter `dataSource`
the ` dataSource` will be iterate and shown as a single `<TabPane>` that the value and label will be provide 
from attribute `dataSource`

## Example

### `simple`

Example tabs with simple format, 

```js
const dataSourceTabs = [
    { title: 'Tab 1', key: 'tab1', icon:'apple', tabContent:<div>This Tab 1 Content</div> },
    { title: 'Tab 2', key: 'tab2', tabContent:<div>This Tab 2 Content</div> },
    { title: 'Tab 3', key: 'tab3', tabContent:<div>This Tab 3 Content</div> },
];
const onTabChange = (key)=>{
    //do something with the selected TabPane here
    console.log(key);
}
<AtiTabsGroup
    dataSource={dataSourceTabs}
    activeKey={tabKey}
    events = {
        {onChange: onTabChange}
    }
/>
```

### `custom`

Example tabs with custom format, 
Only card type Tabs support adding & closable. +Use closable={false} to disable close.
In order to fit in more tabs, they can slide left and right (or up and down).
```js
const dataSourceTabs = [
    { title: 'Tab 1', key: 'tab1', icon:'apple', tabContent:<div>This Tab 1 Content</div> },
    { title: 'Tab 2', key: 'tab2', tabContent:<div>This Tab 2 Content</div> },
    { title: 'Tab 3', key: 'tab3', tabContent:<div>This Tab 3 Content</div>, closable: true },
    { title: 'Tab 4', key: 'tab4', tabContent:<div>This Tab 4 Content</div> },
    { title: 'Tab 5', key: 'tab5', tabContent:<div>This Tab 5 Content</div> },
];
const onTabChange = (key)=>{
    //do something with the selected TabPane here
    console.log(key);
}
AtiTabsGroup
                        tabPosition="left"
                        dataSource={dataSourceTabs}
                        type="editable-card"
                        activeKey={tabKey}
                        customStyle={{ height: 220 }}
                        events = {
                            {
                                onChange: (key) => {onTabChange(key, dispatch)},
                                onEdit: (targetKey, action) => {
                                    alert("update state to remove selected index");
                                }
                            }
                        }
                    />
```