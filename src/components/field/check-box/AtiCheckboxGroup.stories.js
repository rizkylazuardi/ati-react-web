import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import { withState } from '@dump247/storybook-state'
import AtiCheckboxGroupMd from './AtiCheckboxGroup.md'
import AtiCheckboxGroup from './../check-box/AtiCheckboxGroup'
import AtiCheckbox from './../check-box/AtiCheckbox'
import { Provider } from 'react-redux'
import store from './../../../store/index'

storiesOf('Check Box', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <div style={{padding: '20px'}}>
      <Provider store={store}>
        {getStory()}
      </Provider>
    </div>)
  )
  .addDecorator(withReadme(AtiCheckboxGroupMd))
// .addWithDoc('Default', AtiCheckboxGroup,null,()=>{
  .addWithDoc('Default', AtiCheckbox, null, withState({checked: false})(({ store }) => {
    const onChange = () => {
      store.set({ checked: !store.state.checked })
    }

    return (
      <div>
        <AtiCheckbox
          events={{onChange: onChange}}
          checked={store.state.checked}
          // autoFocus = {true}
        >
                        Checkbox
        </AtiCheckbox>
      </div>
    )
  }))
  .addWithDoc('Checkbox group', AtiCheckboxGroup, null, withState({currentData: ['Apple']})(({ store }) => {
    const plainOptions = [
      { label: 'Apple', value: 'Apple' },
      { label: 'Pear', value: 'Pear' },
      { label: 'Orange', value: 'Orange' }
    ]

    const onChange = (data) => {
      store.set({currentData: JSON.stringify(data)})
    }

    const datasourceKnob = object('dataSource', plainOptions, null)
    return (
      <div>
        <AtiCheckboxGroup
          dataSource={datasourceKnob}
          defaultValue={store.state.currentData}
          events={{onChange: onChange}}
        />
        <br />
            Checkbox Current Data : {store.state.currentData}

      </div>
    )
  }))
  .addWithDoc('Checkbox check all', AtiCheckboxGroup, null,
    withState(
      {
        checkedList: ['Apple', 'Pear'],
        checkAll: false,
        indeterminate: true
      }
    )(({ store }) => {
      const plainOptions = [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' }
      ]

      const onChange = (checkedList) => {
        store.set({
          checkedList,
          indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
          checkAll: checkedList.length === plainOptions.length
        })
      }
      const onCheckAllChange = (e) => {
        store.set({
          checkedList: e.target.checked
            ? plainOptions.map((item) => {
              return item.value
            })
            : [],
          indeterminate: false,
          checkAll: e.target.checked
        })
      }

      return (
        <div>
          <AtiCheckbox
            events={
              {
                onChange: onCheckAllChange
              }
            }
            indeterminate={store.state.indeterminate}
            checked={store.state.checkAll}
          >
            Check All
          </AtiCheckbox>
          <AtiCheckboxGroup
            dataSource={plainOptions}
            value={store.state.checkedList}
            events={{onChange: onChange}}
          />

          <br />
            Checkbox Current Data : {JSON.stringify(store.state.checkedList)}

        </div>
      )
    }))
