import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, object, array } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiCollapse from './AtiCollapse'
import AtiCollapseMd from './AtiCollapse.md'

storiesOf('Collapse', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiCollapseMd))
  .addWithDoc('Default', AtiCollapse, null, () => {
    const dataPanel = [
      {header: <div><p>Panel asdf</p><br /> <p>Panel 2</p></div>, key: '1', style: {}, disabled: true, showArrow: true, text: <p>This is Content of panel 1</p>},
      {header: 'Panel 2', key: '2', style: {}, showArrow: true, text: <p>This is Content of panel 2</p>},
      {header: 'Panel 3', key: '3', style: {}, showArrow: false, text: <p>This is Content of panel 3</p>},
      {header: 'Panel 4', key: '4', style: {}, showArrow: true, text: <p>This is Content of panel 4</p>}
    ]
    return (
      <AtiCollapse
        defaultActiveKey={array('defaultActiveKey', ['1', '3'])}
        bordered={boolean('bordered', true)}
        events={
          {
            onChange: (key) => {
              //console.log(key)
            }
          }
        }
        dataSource={object('data', dataPanel)}
      />

    )
  }
  )
  .addWithDoc('Borderless', AtiCollapse, null, () => {
    const dataPanel = [
      {header: 'Panel 1', key: '1', style: {}, disabled: true, showArrow: true, text: <p>This is Content of panel 1</p>},
      {header: 'Panel 2', key: '2', style: {}, showArrow: true, text: <p>This is Content of panel 2</p>},
      {header: 'Panel 3', key: '3', style: {}, showArrow: false, text: <p>This is Content of panel 3</p>},
      {header: 'Panel 4', key: '4', style: {}, showArrow: true, text: <p>This is Content of panel 4</p>}
    ]

    return (
      <AtiCollapse
        defaultActiveKey={array('defaultActiveKey', ['1'])}
        bordered={boolean('bordered', false)}
        events={
          {
            onChange: (key) => {
              //console.log(key)
            }
          }
        }
        dataSource={object('data', dataPanel)}
      />

    )
  }
  )
  .addWithDoc('Custom Panel', AtiCollapse, null, () => {
    const customPanelStyle = {
      background: '#f7f7f7',
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: 'hidden'
    }

    const dataPanels = [
      {header: 'Panel 1', key: '1', style: customPanelStyle, disabled: true, showArrow: true, text: <p>This is Content of panel 1</p>},
      {header: 'Panel 2', key: '2', style: customPanelStyle, showArrow: true, text: <p>This is Content of panel 2</p>},
      {header: 'Panel 3', key: '3', style: customPanelStyle, showArrow: false, text: <p>This is Content of panel 3</p>},
      {header: 'Panel 4', key: '4', style: customPanelStyle, showArrow: true, text: <p>This is Content of panel 4</p>}
    ]
    return (
      <AtiCollapse
        defaultActiveKey={array('defaultActiveKey', ['1'])}
        bordered={boolean('bordered', false)}
        events={
          {
            onChange: (key) => {
              //console.log(key)
            }
          }
        }
        dataSource={object('data', dataPanels)}
      />

    )
  }
  )
