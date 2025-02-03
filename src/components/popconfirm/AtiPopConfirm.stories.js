import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react'
import AtiPopConfirm from './AtiPopConfirm'
import { message, Icon } from 'antd'
import { withReadme } from 'storybook-readme'
import AtiPopConfirmMd from './AtiPopConfirm.md'

storiesOf('PopConfirm', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiPopConfirmMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Normal', AtiPopConfirm, null, () => {
    const confirm = () => {
      message.success('Next Step')
    }

    const cancel = () => {
      message.error('Click on cancel')
    }

    return (
      <div>
        <AtiPopConfirm
          placement={select('placement',
            {
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
            })
          }

          textConfirm={text('textConfirm', 'Are you sure delete this task ?')}
          okText={text('okText', 'Yes')}
          cancelText={text('cancelText', 'Cancel')}
          events={
            {onCancel: cancel, onConfirm: confirm}
          }
          arrowPointAtCenter={boolean('arrowPointAtCenter', true)}
          autoAdjustOverflow={boolean('autoAdjustOverflow', true)}
          icon={<Icon type='smile' />}
        >
          <a href='#'>Delete Data</a>

        </AtiPopConfirm>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>

    )
  })
