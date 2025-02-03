import React from 'react'
import { storiesOf } from '@storybook/react'
import AtiTextAreaField from './AtiTextAreaField'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTextAreaFieldMd from './AtiTextAreaField.md'

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTextAreaFieldMd))
  .addWithDoc('Textarea', AtiTextAreaField, null, () => {
    return (
      <AtiTextAreaField
        id={text('ID', null)}
        name={text('Name', null)}
        label={text('Label', 'Address')}
        placeholder={text('Placeholder', null)}
        rows={number('rows', 5)}
        events={
          {
            onChange: (e) => {
              //console.log(e.target.value)
            },
            onBlur: (e) => {
              //console.log(e.target.value)
            }
          }
        }
        disabled={boolean('Disabled?', false)}
        showError={boolean('showError?', false)}
        readonly={boolean('Readonly?', false)}
      />
    )
  }
  )
