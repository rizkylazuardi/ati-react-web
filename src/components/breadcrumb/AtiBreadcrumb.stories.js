import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiBreadcrumbMd from './AtiBreadcrumb.md'
import AtiBreadcrumb from './AtiBreadcrumb'
import AtiBreadcrumbItem from './AtiBreadcrumbItem'
import { Icon } from 'antd'

storiesOf('Breadcrumb', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{ padding: '10px' }}>{getStory()}</div>)
  .addDecorator(withReadme(AtiBreadcrumbMd))
  .addWithDoc('Default', AtiBreadcrumb, null, () => {
    return (
      <AtiBreadcrumb>
        <AtiBreadcrumbItem href={text('href1', 'https://ant.design/')}>
                Ant Design
        </AtiBreadcrumbItem>
        <AtiBreadcrumbItem href={text('href2', 'https://ant.design/')}>
          <Icon type={text('Icon', 'home')} />
          <span>Breadcrumb</span>
        </AtiBreadcrumbItem>
      </AtiBreadcrumb>
    )
  })
  .addWithDoc('using datasource', AtiBreadcrumb, null, () => {
    const dataSource = [
      {url: 'https://ant.design/', component: 'Ant Design'},
      {url: 'https://ant.design/components/breadcrumb/',
        component: <span><Icon type='home' /> Breadcrumb</span>
      }
    ]
    const dataSourceKnob = object('dataSource', dataSource)

    return (
      <AtiBreadcrumb dataSource={dataSourceKnob} />
    )
  })
