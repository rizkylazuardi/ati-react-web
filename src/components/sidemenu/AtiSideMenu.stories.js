import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiSideMenuMd from './AtiSideMenu.md'
import AtiSideMenu from './AtiSideMenu'
import {Icon} from 'antd'

const menu = [
  {
    key: 'item-1',
    type: 'item',
    childComponent: <span><Icon type='book' /><span>Navigation One</span></span>
  },
  {
    key: 'item-2',
    type: 'item',
    disabled: true,
    childComponent: <span><Icon type='compass' /><span>Navigation Two</span></span>
  },
  {
    key: 'sub-1',
    type: 'subitem',
    childComponent: <span><Icon type='pie-chart' /><span>Navigation Three</span></span>,
    childItems: [
      {
        key: 'sub-1-item-1',
        type: 'item',
        childComponent: <div style={{width: '200px', height: '500px'}}>
          <p>aa</p>
          <hr />
          <p> aaa</p> </div>
      },
      {
        key: 'sub-1-item-2',
        type: 'subitem',
        childComponent: <span><Icon type='select' /><span>Item Nav Two</span></span>,
        childItems: [
          {
            key: 'group-1-item-2-item-1',
            type: 'item',
            childComponent: <span><Icon type='user-delete' /><span>Item Sub Sub One</span></span>
          }
        ]
      }
    ]
  },
  {
    key: 'divider-1',
    type: 'divider'
  },
  {
    key: 'group-1',
    type: 'itemgroup',
    childComponent: <span><Icon type='usergroup-add' /><span>Group One</span></span>,
    childItems: [
      {
        key: 'group-1-item-1',
        type: 'item',
        childComponent: <span><Icon type='user-delete' /><span>Item Group One</span></span>
      }
    ]
  },
  {
    key: 'group-2',
    type: 'itemgroup',
    childComponent: <span><Icon type='usergroup-delete' /><span>Group Two</span></span>,
    childItems: [
      {
        key: 'group-2-item-1',
        type: 'item',
        childComponent: <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>Item Group Two - Link</a>
      }
    ]
  }
]

const nestedMenu = [
  {
    key: 'item-1',
    type: 'item',
    childComponent: <span><Icon type='book' /><span>Navigation One</span></span>
  },
  {
    key: 'item-2',
    type: 'item',
    disabled: true,
    childComponent: <span><Icon type='compass' /><span>Navigation Two</span></span>
  },
  {
    key: 'sub-1',
    type: 'subitem',
    childComponent: <span><Icon type='pie-chart' /><span>Navigation Three</span></span>,
    childItems: [
      {
        key: 'sub-1-item-1',
        type: 'item',
        childComponent: <span><Icon type='database' /><span>Item Nav One</span></span>
      },
      {
        key: 'sub-1-item-2',
        type: 'item',
        childComponent: <span><Icon type='select' /><span>Item Nav Two</span></span>
      }
    ]
  },
  {
    key: 'divider-1',
    type: 'divider'
  },
  {
    key: 'group-1',
    type: 'itemgroup',
    childComponent: <span><Icon type='usergroup-add' /><span>Group One</span></span>,
    childItems: [
      {
        key: 'group-1-item-1',
        type: 'item',
        childComponent: <span><Icon type='user-delete' /><span>Item Group One</span></span>
      }
    ]
  },
  {
    key: 'group-2',
    type: 'itemgroup',
    childComponent: <span><Icon type='usergroup-delete' /><span>Group Two</span></span>,
    childItems: [
      {
        key: 'group-2-item-1',
        type: 'item',
        childComponent: <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>Item Group Two - Link</a>
      }
    ]
  }
]

storiesOf('Side Menu', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiSideMenuMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Side Menu', AtiSideMenu, null, () => {
    return (
      <div style={{width: '800px', height: '800px'}}>
        <AtiSideMenu
          mode={'inline'}
          theme={select('Theme',
            {
              dark: 'dark', light: 'light'
            }, 'dark', null)}
          defaultOpenKeys={['sub-1']}
          forceSubMenuRender={true}
          defaultSelectedKeys={['sub-1-item-1']}
          dataSource={menu}
          inlineCollapsed
        />
      </div>
    )
  }
  )
  .addWithDoc('Neted Side Menu', AtiSideMenu, null, () => {
    return (
      <div style={{width: '800px', height: '800px'}}>
        <AtiSideMenu
          mode={'vertical'}
          theme={select('Theme',
            {
              dark: 'dark', light: 'light'
            }, 'dark', null)}
          defaultOpenKeys={['sub-1']}
          forceSubMenuRender={true}
          defaultSelectedKeys={['sub-1-item-1']}
          dataSource={nestedMenu}
          inlineCollapsed
        />
      </div>
    )
  }
  )
