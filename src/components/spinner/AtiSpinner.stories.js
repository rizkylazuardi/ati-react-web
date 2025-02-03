import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiSpinnerMd from './AtiSpinner.md'
import AtiSpinner from './AtiSpinner'

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiSpinnerMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Default', AtiSpinner, null, () => {
    return (
      <AtiSpinner
        size={text('size', 'default')}
        tip={text('tip', 'Loading...')}
        delay={number('delay', 50)}
        spinning={boolean('spinning', true)}
      >
        <p>TEST</p>
      </AtiSpinner>
    )
  }
  )

  .addWithDoc('Custom', AtiSpinner, null, () => {
    return (
      <AtiSpinner
        size={text('size', 'large')}
        iconName={text('icon name indicator spinner', 'loading')}
        wrapperClassName={select('wrapperClassName', ['wrapperClassNameGrey', 'wrapperClassNamePink'], 'wrapperClassNameGrey')}
        tip={text('tip', 'Loading...')}
        delay={number('delay', 20)}
        spinning={boolean('spinning', true)}
      >
        <p>TEST</p>
      </AtiSpinner>
    )
  }
  )
