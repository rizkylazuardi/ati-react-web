import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiPagination from './AtiPagination'
import AtiPaginationMd from './AtiPagination.md'

storiesOf('Pagination', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiPaginationMd))
  .addWithDoc('Default', AtiPagination, null, () => {
    return (
      <AtiPagination
        current={1}
        total={number('total', 50)} />
    )
  }
  )
  .addWithDoc('Simple', AtiPagination, null, () => {
    return (
      <AtiPagination
        simple={boolean('simple', true)}
        current={1}
        total={number('total', 50)} />
    )
  }
  )
  .addWithDoc('More Items', AtiPagination, null, () => {
    return (
      <AtiPagination current={1}
        total={number('total', 50)}
      />
    )
  }
  )
  .addWithDoc('Custom Info', AtiPagination, null, () => {
    return (
      <div>
        <AtiPagination
          total={number('total', 85)}
          events={
            {
              showTotal: (total) => `Total ${total} items`
            }
          }
          pageSize={number('pageSize', 20)}
          current={1}
        />
        <br />
        <AtiPagination
          total={number('total', 85)}
          events={
            {
              showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
            }
          }
          pageSize={number('pageSize', 20)}
          current={number('current', 1)}
        />
      </div>
    )
  }
  )
