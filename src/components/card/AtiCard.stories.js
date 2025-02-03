import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs/react'
import AtiCard from './AtiCard'
import AtiCardMeta from './AtiCardMeta'
import { withReadme } from 'storybook-readme'
import AtiCardMd from './AtiCard.md'
import {Icon} from 'antd'

const actions = [
  <Icon type='setting' />,
  <Icon type='edit' />,
  <Icon type='ellipsis' />
]

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiCardMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('AtiCard Without AtiCardMeta', AtiCard, null, () => {
    return (
      <AtiCard
        isLoading={boolean('Loading Card', false)}
        cardTitle={text('Title', 'Card Title')}
        content={text('Content', 'Card Content')}
        extraElement={<a href='#'>More</a>}
        extraStyle={object('Extra Styles', {border: '3px solid #ff00ff', padding: '10px', width: 300}, null)}
        cover={object('Cover', null, null)}
        actions={object('List Actions', actions, null)}
      />
    )
  }
  )

  .addWithDoc('AtiCard Simple', AtiCard, null, () => {
    return (
      <AtiCard
        isLoading={boolean('Loading Card', false)}
        content={text('Content', 'Card Content')}
        extraStyle={object('Extra Styles', { width: 300, padding:'0px' }, null)}
      />
    )
  }
  )

  .addWithDoc('AtiCard With AtiCardMeta', AtiCard, null, () => {
    return (
      <AtiCard
        isLoading={boolean('Loading Card', false)}
        content={<AtiCardMeta
          metaTitle={text('Meta Title', 'Meta Title')}
          metaDescription={text('Meta Description', 'Meta Description')}
          className={text('Meta Class', '')}
        />}
        extraElement={object('Extra Element', null, null)}
        extraStyle={object('Extra Styles', { width: 300 }, null)}
        cover={<img alt='example' src='http://cdn2.tstatic.net/wartakota/foto/bank/images/foto-jokowi-maruf-amin-di-surat-suara-pilpres-2019.jpg' />}
        actions={object('Li st Actions', actions, null)}
      />
    )
  }
  )
