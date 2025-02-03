import React from 'react'
import { storiesOf } from '@storybook/react'
import AtiInputWithMask from './AtiInputWithMask'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiInputWithMaskMd from './AtiInputWithMask.md'

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiInputWithMaskMd))
  .addWithDoc('Input With Mask', AtiInputWithMask, null, () => {
    const mask = ['+', '6', '2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]

    return (
      <AtiInputWithMask
        id={text('ID', null)}
        name={text('Name', null)}
        placeholder={text('Placeholder', null)}
        mask={mask}
        label={text('Label', 'Input With Mask')}
        guide={boolean('Guide Mode ?', null)}
        keepCharPositions={boolean('Keep Char Positions ?', null)}
        placeholderChar={text('Placeholder Char', '_')}
        showMask={boolean('Show Mask ?', true)}
        // onBlur={()=>console.log(AtiInputWithMaskMd)}
        events={
          {
            onBlur: (e) => {
              //console.log(e.target.value)
            },
            onChange: (e) => {
              //console.log(e.target.value)
            }
          }
        }
        value='081290039695'
      />
    )
  })
