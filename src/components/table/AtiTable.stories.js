import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react'
import AtiTable from './AtiTable'
import AtiTableForm from './AtiTableForm'
import {Popconfirm} from 'antd'
import { withReadme } from 'storybook-readme'
import { withState } from '@dump247/storybook-state'
import AtiTableMd from './AtiTable.md'
import axios from 'axios'
import './form-table.css'
import AtiTextbox from '../field/textbox/default/AtiTextbox';

const collumns = [{
  title: 'Name',
  dataIndex: 'name',
  fixed: false,
  sorter: false,
  defaultSortOrder: null,
  align: 'left',
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  filters: [{
    text: 'People Name 1',
    value: 'People Name 1'
  }, {
    text: 'People Name 2',
    value: 'People Name 2'
  }]
}, {
  title: 'Age',
  dataIndex: 'age',
  fixed: false,
  sorter: (a, b) => a.age - b.age,
  defaultSortOrder: null,
  align: 'left'
}, {
  title: 'Address',
  dataIndex: 'address',
  fixed: false,
  sorter: false,
  defaultSortOrder: null,
  align: 'left'
}]

const getMockData = (number) => {
  const mockData = []
  for (let i = 0; i < number; i++) {
    const data = {
      key: i.toString(),
      name: `People Name ${i + 1}`,
      age: i * 10,
      address: `${i + 1} Downing Street`
    }
    mockData.push(data)
  }
  return mockData
}

const getData = () => {
  const mockData = []

  /* axios({
    method: 'GET',
    url: 'http://10.50.51.60:8196/pocket-rest/api/user/get/all',

    data: null,
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json'
  })
    .then(response => {
      // pagination.total = response.data.response.length
      response.data.response.map((user, i) => {
        const data = {
          key: i.toString(),
          name: user.firstName,
          email: user.email,
          phone: user.email
        }
        mockData.push(data)
      })
      //console.log(mockData)
      return mockData
    }).catch(() => {
      //console.log('aaa')
    }) */
  for (let i = 0; i < 7; i++) {
      const data = {
      key: i.toString(),
      name:`People Name ${ i+ 1}`,
      email: 'i*10',
      phone: `${ i+ 1} Downing Street`,
      };
      mockData.push(data);
  }
  /* this.setState({
      dataSource : mockData,
      loading : false,

  }) */
  console.log(mockData);
  return mockData;
}

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTableMd))
  .addDecorator(getStory => <div style={{padding: '10px'}}>{getStory()}</div>)
  .addWithDoc('Table Simple', AtiTable, null, () => {
    return (
      <AtiTable
        loading={boolean('Loading', false)}
        columns={collumns}
        dataSource={getMockData(20)}
        showHeader={boolean('Show Header', false)}
        bordered={boolean('Bordered', false)}
        title={() => 'Header'}
        footer={() => 'Footer'}
      />
    )
  }
  )
  .addWithDoc('Table Form', AtiTableForm, null, () => {
    return (
      <AtiTableForm
        loading={boolean('Loading', false)}
        bordered={boolean('Bordered', false)}
        minimalRow={number('minimalRow', 2)}
        template={
          [
            {title: 'Nama', name: 'name', component: (data, changeData) => {
              console.log(data);
              return (
              <AtiTextbox
                  name="nama"
                  placeholder=""
                  type="text"
                  value={data.value}
                  events={
                    {
                      onChange: (e) => {
                        console.log(e);
                        changeData(data, e.target.value);
                      }
                    }
                  }
                  containerStyle={{ marginBottom: '0 !important' }}
              />
            )}},
            {title: 'Umur', name: 'umur', component: (data, changeData) => {
              console.log(data);
              return (
              <AtiTextbox
                  name="umur"
                  placeholder=""
                  type="text"
                  value={data.value}
                  events={
                    {
                      onChange: (e) => {
                        changeData(data, e.target.value);
                      }
                    }
                  }
                  containerStyle={{ marginBottom: '0 !important' }}
              />
            )}}
          ]
        }
      />
    )
  }
  )
