import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiTextInputNumeric from './AtiTextInputNumeric'
import AtiTextInputNumericMd from './AtiTextInputNumeric.md'
import { Provider } from 'react-redux'
import store from './../../../../store/index'
import './TextInputNumeric.css'

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <div style={{padding: '20px'}}>
      <Provider store={store}>
        {getStory()}
      </Provider>
    </div>)
  )
  .addDecorator(withReadme(AtiTextInputNumericMd))
  .addWithDoc('Text Input Numeric', AtiTextInputNumeric, null, () => {
    // const mask = ['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/];

    // const onItemsChanged = (e) =>{
    //     console.log(e.target.value);
    // }

    const onValueChange = (values) => {
      //console.log(values)
    }

    return (
      <AtiTextInputNumeric id='currency' name='currency' label='Input Number'
        scale={10} precision={5} className='text-input-numeric-custom' thousandSeparator
        defaultValue={123}
        events={
          {
            onValueChange: onValueChange
          }
        }
      />
    )
  })
  .addWithDoc('With Prefix', AtiTextInputNumeric, null, () => {
    // const mask = ['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/];

    const onValueChange = (values) => {
     // console.log(values)
    }

    return (
      <AtiTextInputNumeric id='currency' name='currency' label='Input Number'
        className='text-input-numeric-custom' thousandSeparator={true} prefix='$'
        suffix=',-'

        events={
          {
            onValueChange: onValueChange
          }
        }
      />
    )
  })
  .addWithDoc('Credit Card Format', AtiTextInputNumeric, null, () => {
    // const mask = ['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/];

    // const onItemsChanged = (e) =>{
    //     console.log(e.target.value);
    // }

    const onValueChange = (values) => {
      //console.log(values)
    }

    return (
      <AtiTextInputNumeric id='currency' name='currency' label='Input Number'
        className='text-input-numeric-custom'
        format='#### #### #### ####'
        events={
          {
            onValueChange: onValueChange
          }
        }
      />
    )
  })
  .addWithDoc('Credit Card Format With Mask', AtiTextInputNumeric, null, () => {
    // const mask = ['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/];

    // const onItemsChanged = (e) =>{
    //     console.log(e.target.value);
    // }

    const onValueChange = (values) => {
      //console.log(values)
    }

    return (
      <AtiTextInputNumeric id='currency' name='currency' label='Input Number'
        className='text-input-numeric-custom'
        format='#### #### #### ####' mask='_'
        events={
          {
            onValueChange: onValueChange
          }
        }
      />
    )
  })
  .addWithDoc('Format With Mask as array', AtiTextInputNumeric, null, () => {
    // const mask = ['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/];

    // const onItemsChanged = (e) =>{
    //     console.log(e.target.value);
    // }

    const onValueChange = (values) => {
      //console.log(values)
    }

    return (
      <AtiTextInputNumeric id='currency' name='currency' label='Input Number'
        className='text-input-numeric-custom'
        format='##/##' placeholder='MM/YY' mask={['M', 'M', 'Y', 'Y']}
        events={
          {
            onValueChange: onValueChange
          }
        }
      />
    )
  })
  .addWithDoc('Date Format With Mask', AtiTextInputNumeric, null, () => {
    // const mask = ['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/];

    // const onItemsChanged = (e) =>{
    //     console.log(e.target.value);
    // }

    const onValueChange = (values) => {
      //console.log(values)
    }

    const limit = (val, max) => {
      if (val.length === 1 && val[0] > max[0]) {
        val = '0' + val
      }

      if (val.length === 2) {
        if (Number(val) === 0) {
          val = '01'

          // this can happen when user paste number
        } else if (val > max) {
          val = max
        }
      }

      return val
    }

    const cardExpiry = (val) => {
      let month = limit(val.substring(0, 2), '12')
      let year = val.substring(2, 4)

      return month + (year.length ? '/' + year : '')
    }

    return (
      <AtiTextInputNumeric id='currency' name='currency' label='Input Number'
        className='text-input-numeric-custom'
        format={cardExpiry}
        events={
          {
            onValueChange: onValueChange
          }
        }
      />
    )
  })
  .addWithDoc('Phone Number Format', AtiTextInputNumeric, null, () => {
    // const mask = ['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/];

    // const onItemsChanged = (e) =>{
    //     console.log(e.target.value);
    // }

    const onValueChange = (values) => {
      //console.log(values)
    }

    return (
      <AtiTextInputNumeric id='currency' name='currency' label='Input Number'
        className='text-input-numeric-custom'
        format='+1 (###) ###-####' mask='_'
        events={
          {
            onValueChange: onValueChange
          }
        }
      />
    )
  })
