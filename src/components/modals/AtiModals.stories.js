import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react'
import AtiModals from './AtiModals'
import AtiButton from '../button/AtiButton'
import AtiDatePicker from './../field/datepicker/AtiDatePicker'
import AtiCheckboxGroup from './../field/checkbox/AtiCheckboxGroup'
import AtiCheckbox from './../field/checkbox/AtiCheckbox'
import { withReadme } from 'storybook-readme'
import AtiModalsMd from './AtiModals.md'

storiesOf('Modals', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiModalsMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Modals (header,body,footer)', AtiModals, null, () => {
    return (
      <AtiModals
        isOpen={boolean('isOpen', true)}
        header={"Header"}
        events={
          {
            toggle: () => {
              console.log('test')
            }
          }
        }
        backdrop={boolean('backdrop', false)}
        size={text('size', 'md')}
        zIndex={text('zIndex', '1000')}
      >
        <div><AtiDatePicker /></div>
      </AtiModals>
    )
  }
  )

  .addWithDoc('Modals (body)', AtiModals, null, () => {
    return (
      <AtiModals
        isOpen={boolean('isOpen', true)}
        size={text('size', 'md')}
        backdrop={boolean('backdrop', false)}
        zIndex={text('zIndex', '1000')}
        contentClassName={select('contentClassName', ['progressBar', 'backdropModals', 'backgroundModalClasName'], 'progressBar')}
      >
        <div>
          <AtiCheckboxGroup label='Hobi'>
            <AtiCheckbox id='renang' value='renang' text='Renang' size='sm' onChange={(e) => {
               //console.log(e.target.checked)
                }} />
            <AtiCheckbox id='futsal' value='futsal' text='Futsal' size='sm' />
          </AtiCheckboxGroup>
        </div>
      </AtiModals>
    )
  }
  )
