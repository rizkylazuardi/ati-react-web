import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select, object, array, func } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import { action } from '@storybook/addon-actions'
import { State, Store } from '@sambego/storybook-state'

import { Modal, Button } from 'reactstrap'

import { withState } from '@dump247/storybook-state'
import AtiTextBoxSearchPopup from './AtiTextBoxSearchPopup'
// import AtiTextBoxSearchPopupMd from './AtiTextBoxSearchPopup.md'

storiesOf('TextBox', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{ padding: '10px' }}>{getStory()}</div>)
  // .addDecorator(withReadme(AtiTextBoxSearchPopupMd))
  .addWithDoc('Text Box With Search Popup', AtiTextBoxSearchPopup, null, () => {
    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      fixed: false,
    }, {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      fixed: false,
    }]
    const data = [
      { id: 'a', description: 'a' },
      { id: 'b', description: 'b' },
      { id: 3, description: 'c' },
      { id: 4, description: 'd' },
      { id: 5, description: 'e' },
      { id: 6, description: 'f' },
      { id: 7, description: 'g' },
      { id: 8, description: 'h' },
      { id: 9, description: 'i' },
      { id: 10, description: 'j' },
      { id: 11, description: 'k' },
      { id: 12, description: 'l' },
      { id: 13, description: 'm' },
      { id: 14, description: 'n' },
      { id: 15, description: 'o' },
      { id: 'a', description: 'p' },
    ]
    const paginationPositionOption = { bottom: 'bottom', top: 'top' }
    const customAction = (record) => { console.log(record) }


    return (
      <AtiTextBoxSearchPopup
        rowKeyTable={'id'}
        columnsTable={columns}
        dataTable={data}
        paginationPosition={select('Pagination Position', paginationPositionOption, 'bottom', null)}
        actionColumn={boolean('Action Column', false, null)}
        valueKeyTable={'description'}
        customAction={customAction}
      />
    )
  }
  )