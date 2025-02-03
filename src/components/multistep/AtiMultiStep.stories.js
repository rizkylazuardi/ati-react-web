import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiMultiStepMd from './AtiMultiStep.md'
import AtiMultiStep from './AtiMultiStep'
import { Icon } from 'antd'
import 'antd/dist/antd.css'

storiesOf('AtiMultiStep', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiMultiStepMd))
  .addWithDoc('Default', AtiMultiStep, null, () => {
    // .addWithDoc('Default', AtiTabsGroup,null,withState({value:'tab1'})(({ store })=>{
    const multiStepSource = [
      {title: 'Simple Registration', icon: <Icon type='apple' />, description: 'desc 1', stepContent: <span>Registration</span>},
      {title: 'Full Registration', icon: <Icon type='apple' />, description: 'desc 2', stepContent: <span>Full Registration</span>},
      {title: 'Account Security', icon: <Icon type='apple' />, description: 'desc 3', stepContent: <span>Account Security</span>}
    ]

    const datasourceKnob = object('dataSource', multiStepSource, null)

    return (
      <AtiMultiStep
        dataSource={datasourceKnob}
        currentStep={number('currentStep', 0)}
      />
    )
  })
