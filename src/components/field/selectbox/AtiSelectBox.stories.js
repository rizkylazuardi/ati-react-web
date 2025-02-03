import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiSelectBoxMd from './AtiSelectBox.md'
import AtiSelectBox from './AtiSelectBox'
import { withState } from '@dump247/storybook-state'
import { Provider } from 'react-redux';
import store from './../../../store/index';

storiesOf('Select Box', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <div style={{padding: '20px'}}>
      <Provider store={store}>
        {getStory()}
      </Provider>
    </div>)
  )
  .addDecorator(withReadme(AtiSelectBoxMd))
  .addWithDoc('Default', AtiSelectBox, null, withState({value: null})(({ store }) => {
    const dataSource = [
      { label: 'USD', value: 'USD' },
      { label: 'IDR', value: 'IDR' },
      { label: 'SGD', value: 'SGD' }
    ]

    const onItemChanged = (values) => {
      console.log(values);
      store.set({value: values})
    }

    const datasourceKnob = object('datasource', dataSource, null)
    return (
      <AtiSelectBox id={text('id', 'mataUang')} name={text('name', 'mataUang')}
        label={text('label', 'Mata Uang')}
        placeholder={text('placeholder', 'Pilih mata uang ..')}
        data={datasourceKnob}
        events={
          {onItemChanged: onItemChanged
          }
        }
        defaultValue={
          { label: 'USD', value: 'USD' }
        }
        searchable={boolean('searchable ?', true)}
        clearable={boolean('clearable', true)}
        showSpinner={boolean('showSpinner', false)}
        disabled={boolean('disabled', false)}
        multi={boolean('multi ?', false)}
        noResultsText={text('noResultText', 'data not found')}
      />
    )
  }))
