import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiCreditCardInput from '../creditcard/AtiCreditCardInput'
import AtiCreditCardInputMd from '../creditcard/AtiCreditCardInput.md'

storiesOf('Credit Card Input', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiCreditCardInputMd))
  .addWithDoc('Default', AtiCreditCardInput, null, () => {
    return (
      <AtiCreditCardInput
        inputClass={text('Class for input', 'my-custom-class')}
        holderNamePlaceholder={text('Name Placeholder', '')}
        cardNumberPlaceholder={text('Card Number Placeholder', '')}
        expiryDatePlaceholder={text('Expiry Date Placeholder', '')}
        cvcNumberPlaceholder={text('CVC Placeholder', '')}
      />
    )
  }
  )
