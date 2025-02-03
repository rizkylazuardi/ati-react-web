import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTabsMd from './AtiTabs.md'
import AtiTabsGroup from './AtiTabsGroup'
import 'antd/dist/antd.css'

storiesOf('AtiTabs', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiTabsMd))
  .addWithDoc('Default', AtiTabsGroup, null, () => {
    // .addWithDoc('Default', AtiTabsGroup,null,withState({value:'tab1'})(({ store })=>{
    const dataSource = [
      { title: 'Tab 1', key: 'tab1', tabContent: <span>This Tab 1 Content</span> },
      { title: 'Tab 2', key: 'tab2', tabContent: <span>This Tab 2 Content</span> },
      { title: 'Tab 3', key: 'tab3', tabContent: <span>This Tab 3 Content</span> }
    ]

    const datasourceKnob = object('dataSource', dataSource, null)
    const onChangeTab = (activeTab) => {
      //console.log(activeTab)
      // store.set({value:activeTab});
    }

    const onEdit = () => {
      //console.log('tes')
    }

    const onNextClick = () => {
      //console.log('next')
    }

    const onPrevClick = () => {
      //console.log('prev')
    }

    const onTabClick = () => {
      //console.log('Tab')
    }

    return (
      <AtiTabsGroup
        dataSource={datasourceKnob}
        activeKey={select('activeKey', dataSource.map((item) => { return item.key }))}
        type='card'
        tabBarGutter={0}
        events={
          {
            onChange: onChangeTab,
            onEdit: onEdit,
            onNextClick: onNextClick,
            onPrevClick: onPrevClick,
            onTabClick: onTabClick
          }
        }
      />
    )
  })
  .addWithDoc('Custom', AtiTabsGroup, null, () => {
    const dataSourceTabs = [
      { title: 'Tab 1', key: 'tab1', icon: 'apple', tabContent: <div>This Tab 1 Content</div> },
      { title: 'Tab 2', key: 'tab2', tabContent: <div>This Tab 2 Content</div> },
      { title: 'Tab 3', key: 'tab3', tabContent: <div>This Tab 3 Content</div> },
      { title: 'Tab 4', key: 'tab4', tabContent: <div>This Tab 4 Content</div>, closable: true },
      { title: 'Tab 5', key: 'tab5', tabContent: <div>This Tab 5 Content</div> }
    ]

    const datasourceKnob = object('dataSource', dataSourceTabs, null)

    return (
      <AtiTabsGroup
        tabPosition={select('tabPosition',
          {
            left: 'left', top: 'top', right: 'right', bottom: 'bottom'
          }, 'left', null)}
        type={select('type',
          {
            line: 'line', card: 'card', editablecard: 'editable-card'
          }, 'editablecard', null)}
        dataSource={datasourceKnob}
        activeKey={select('activeKey', dataSourceTabs.map((item) => { return item.key }), 'tab1')}
        customStyle={object('customStyle', { height: 220 }, null)}
        events={
          {onChange: (key) => { onTabChange(key, dispatch) },
            onEdit: () => {
              alert('update state to remove selected index')
            }
          }
        }
      />
    )
  })
