import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiConfirmBox from './AtiConfirmBox'
import AtiConfirmBoxMd from './AtiConfirmBox.md'
import AtiPopConfirm from './../popconfirm/AtiPopConfirm'
import { message } from 'antd'

storiesOf('Confirm Box', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiConfirmBoxMd))
  .addDecorator((getStory) => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiConfirmBox,
    'It should render a ConfirmBox with a label',
    () => {
      return (
        <AtiConfirmBox
          isOpen={boolean('isOpen', true, null)}
          events={
            {
              onConfirm: () => {
                //console.log('confirm')
              }
            }
          }
          text={text('text', 'Anda yakin ingin memproses data ?', null)}
        />
      )
    }
  )
  .addWithDoc('PopConfirm', AtiConfirmBox,
    'Pop Confirm',
    () => {
      const placement = {
        topLeft: 'topLeft',
        top: 'top',
        topRight: 'topRight',
        leftTop: 'leftTop',
        left: 'left',
        leftBottom: 'leftBottom',
        rightTop: 'rightTop',
        right: 'right',
        rightBottom: 'rightBottom',
        bottomLeft: 'bottomLeft',
        bottom: 'bottom',
        bottomRight: 'bottomRight'
      }

      const confirm = (e) => {
        message.success('Click on Yes')
      }

      const cancel = (e) => {
        message.error('Click on No')
      }
      return (
        <div>
          <AtiPopConfirm
            placement={select('placement', placement, 'left')}
            textConfirm={text('textConfirm', 'Are you sure delete this task ?')}
            okText={text('okText', 'Yes')}
            cancelText={text('cancelText', 'Cancel')}
            events={
              {onCancel: cancel, onConfirm: confirm}
            }
          >
            <a href='#'>Delete Data</a>
          </AtiPopConfirm>
        </div>
      )
    }
  )
