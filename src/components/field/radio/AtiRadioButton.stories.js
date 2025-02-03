import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiRadioButton from './AtiRadioButton'
import AtiRadioButtonMd from './AtiRadioButton.md'

storiesOf('Radio Button', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiRadioButtonMd))
  .addWithDoc('Default', AtiRadioButton, null, () => {
    const dataSource = [
      {id: 'id1', label: 'Reguler', value: 'R', disabled: true},
      {id: 'id2', label: 'Premium', value: 'P'},
      {id: 'id3', label: 'VIP', value: 'V'},
      {id: 'id4', label: 'Khusus', value: 'K'}
    ]

    const onItemChanged = (items) => {
      //console.log(items)
    }

    const datasourceKnob = object('datasource', dataSource, null)
    return (
      <AtiRadioButton label={text('label', 'Jalur')} name={text('name', 'jalur')}
        data={datasourceKnob}
        events={
          {onItemChanged: onItemChanged}
        }
      />
    )
  }
  )
  .addWithDoc('Custom Data Source', AtiRadioButton, null, () => {
    const customSource = [
      {id: 'cbo1', text: 'Perempuan', name: 'P'},
      {id: 'cbo2', text: 'laki Laki', name: 'L'}
    ]

    const onItemChanged = (items) => {
      //console.log(items)
    }

    const customsourceKnob = object('datasource', customSource, null)
    return (
      <AtiRadioButton label={text('label', 'Jenis Kelamin')} name={text('name', 'jenisKelamin')}
        labelKey={text('labelKey', 'text')} valueKey={text('valueKey', 'name')}
        data={customsourceKnob}
        events={
          {onItemChanged: onItemChanged}
        }
      />
    )
  })
