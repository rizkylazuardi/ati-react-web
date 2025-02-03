import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiDrawerMd from './AtiDrawer.md'
import AtiDrawer from './AtiDrawer.js'
import AtiButton from '../button/AtiButton'
import { withState } from '@dump247/storybook-state'
import 'antd/dist/antd.css'

storiesOf('Drawer', module)
  .addDecorator(withKnobs)
// .addDecorator(getStory=><div style={{padding:"10px"}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiDrawerMd))
  .addWithDoc('Custom', AtiDrawer, null, withState({visible: true})(({ store }) => {
    const showDrawer = () => {
      store.set({
        visible: true
      })
    }

    const onClose = () => {
      store.set({
        visible: false
      })
    }

    return (
      <div>
        <AtiButton className='btn btn-primary btn-sm' text='Open Drawer'
          events={
            {
              onClick: showDrawer
            }
          } />

        <AtiDrawer
          title={text('Title', 'Drawer')}
          placement={select('Placement',
            {
              right: 'right', left: 'left'
            }, 'right', null)}
          closable={boolean('closable', true)}
          mask={boolean('Mask', true)}
          maskClosable={boolean('MaskClosable', true)}
          visible={boolean('visible', store.state.visible)}
          width={number('width', 256)}
          zIndex={number('zIndex', 1000)}
          // style = {style}
          // visible = {store.state.visible}
          events={
            {
              onClose: onClose
            }
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </AtiDrawer>
      </div>
    )
  }))
