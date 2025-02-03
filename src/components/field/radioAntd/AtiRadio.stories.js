import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import { withState } from '@dump247/storybook-state'
import AtiRadioButton from './AtiRadioButton'
import AtiRadioItem from './AtiRadioItem'
import AtiRadioButtonItem from './AtiRadioButtonItem'
import AtiRadioMd from './AtiRadio.md'
import {Button, Input} from 'antd'

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiRadioMd))
  .addWithDoc('group', AtiRadioButton, null, withState({value: 1})(({ store }) => {
    const onChange = (e) => {
      store.set({
        value: e.target.value
      })
    }

    return (
      <AtiRadioButton
        name='radio-group'
        value={store.state.value}
        events={
          {onChange: onChange}
        }
      >
        <AtiRadioItem value={1}>A</AtiRadioItem>
        <AtiRadioItem value={2}>B</AtiRadioItem>
        <AtiRadioItem value={3}>C</AtiRadioItem>
        <AtiRadioItem value={4}>D</AtiRadioItem>
      </AtiRadioButton>
    )
  }))
  .addWithDoc('solid size', AtiRadioButton, null, withState({value1: 1, value2: null})(({ store }) => {
    const onChange1 = (e) => {
      store.set({
        value1: e.target.value
      })
    }
    const onChange2 = (e) => {
      store.set({
        value2: e.target.value
      })
    }

    return (
      <div>
        <div>
          <AtiRadioButton
            name='radio-group'
            value={store.state.value1}
            buttonStyle={text('buttonStyle', 'solid')}
            size={select('Size',
              {
                small: 'small', medium: 'medium', large: 'large'
              }, 'small', null)
            }
            events={
              {onChange: onChange1}
            }
          >
            <AtiRadioButtonItem value={1}>Huangzhou</AtiRadioButtonItem>
            <AtiRadioButtonItem value={2}>Jakarta</AtiRadioButtonItem>
            <AtiRadioButtonItem value={3}>Japan</AtiRadioButtonItem>
            <AtiRadioButtonItem value={4}>New Zealand</AtiRadioButtonItem>
          </AtiRadioButton>
        </div>
        <div style={{marginTop: 16}}>
          <AtiRadioButton
            name='radio-group2'
            value={store.state.value2}
            buttonStyle='solid'
            size='large'
            events={
              {onChange: onChange2}
            }
          >
            <AtiRadioButtonItem value={5} disabled>Huangzhou</AtiRadioButtonItem>
            <AtiRadioButtonItem value={6}>Jakarta</AtiRadioButtonItem>
            <AtiRadioButtonItem value={7}>Japan</AtiRadioButtonItem>
            <AtiRadioButtonItem value={8}>New Zealand</AtiRadioButtonItem>
          </AtiRadioButton>
        </div>
      </div>
    )
  }))
  .addWithDoc('disabled', AtiRadioButton, null, withState({value: 1, disabled: true})(({ store }) => {
    const onChange = (e) => {
      store.set({
        value: e.target.value
      })
    }

    const toggleDisabled = () => {
      store.set({
        disabled: !store.state.disabled
      })
    }

    return (
      <div>
        <AtiRadioButton
          name='radio-group'
          value={store.state.value}
          events={
            {onChange: onChange}
          }
          disabled={store.state.disabled}
        >
          <AtiRadioItem value={1}>A</AtiRadioItem>
          <AtiRadioItem value={2}>B</AtiRadioItem>
          <AtiRadioItem value={3}>C</AtiRadioItem>
          <AtiRadioItem value={4}>D</AtiRadioItem>
        </AtiRadioButton>
        <br />
        <Button
          type='primary'
          onClick={toggleDisabled}
        >
            Toggle disabled
        </Button>
      </div>
    )
  }))
  .addWithDoc('vertical', AtiRadioButton, null, withState({value: null, valueMore: ''})(({ store }) => {
    const onChange = (e) => {
      store.set({
        value: e.target.value
      })
    }

    const handleOnChange = (e) => {
      store.set({
        valueMore: e.target.value
      })
    }

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }

    return (
      <AtiRadioButton
        name='radio-group'
        value={store.state.value}
        events={
          {onChange: onChange}
        }
      >
        <AtiRadioItem value={1} style={radioStyle}>A</AtiRadioItem>
        <AtiRadioItem value={2} style={radioStyle}>B</AtiRadioItem>
        <AtiRadioItem value={3} style={radioStyle}>C</AtiRadioItem>
        <AtiRadioItem value={4} style={radioStyle}>
                More...
          {store.state.value === 4 ? <Input value={store.state.valueMore} onChange={handleOnChange} style={{ width: 100, marginLeft: 10 }} /> : null }
        </AtiRadioItem>
      </AtiRadioButton>
    )
  }))
