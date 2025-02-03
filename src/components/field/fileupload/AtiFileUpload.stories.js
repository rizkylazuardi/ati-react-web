import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Radio, Icon } from 'antd';
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import { withState } from '@dump247/storybook-state'
import AtiFileUpload from './AtiFileUpload'
import AtiFileUploadMd from './AtiFileUpload.md'
import { array } from '@storybook/addon-knobs/dist/react'

const optionsType = {
  button: 'button',
  avatar: 'avatar',
  drag: 'drag'
}

const optionsListType = {
  text: 'text',
  picture: 'picture'
}

optionsListType['picture-card'] = 'picture-card'
storiesOf('Upload', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiFileUploadMd))
  .addWithDoc('Default', AtiFileUpload, null, withState({fileList: null})(({ store }) => {
  //.addWithDoc('Default', AtiFileUpload, null, () => {
    return (
      <AtiFileUpload
        type={select('type', optionsType, 'button')}
        multiple={boolean('multiple', true)}
        action={text('action', '//jsonplaceholder.typicode.com/posts/')}
        listType={select('listType', optionsListType, 'text')}
        limit={number('limit', 2)}
        acceptType={text('acceptType', 'image/*')}
        maxSize={number('maxSize', 250000)}
        allowedExtension={array('allowedExtension', ['jpg', 'png', 'gif', 'jpeg'])}
        fileList={store.state.fileList}
        events={{
            beforeUpload: (file) => {
                console.log(file);
                //store.set({fileList: [file]});
                return false;
            },
            onChange: (info) => {
              let fileList = info.fileList
              store.set({ fileList: [fileList[fileList.length-1]] });
            }

        }}
        renderUploadButton={
          <Button type="primary" icon="download" size="small" >Download</Button>
        }
      />

    )
  }
  ))
  .addWithDoc('Avatar', AtiFileUpload, null, () => {
    return (
      <AtiFileUpload
        type={select('type', optionsType, 'avatar')}
        multiple={boolean('multiple', true)}
        action={text('action', '//jsonplaceholder.typicode.com/posts/')}
        listType={select('listType', optionsListType, 'picture-card')}
        limit={number('limit', 2)}
        acceptType={text('acceptType', 'image/*')}
        events={{
          beforeUpload: (file) => {
            console.log(file);
            return false;
          }
        }}
      />
    )
  }
  )
  .addWithDoc('Draggable', AtiFileUpload, null, () => {
    return (
      <AtiFileUpload
        type={select('type', optionsType, 'drag')}
        multiple={boolean('multiple', true)}
        action={text('action', '//jsonplaceholder.typicode.com/posts/')}
        listType={select('listType', optionsListType, 'picture')}
        limit={number('limit', 2)}
        acceptType={text('acceptType', 'image/*')}
        maxSize={number('maxSize', 25000)}
        allowedExtension={array('allowedExtension', ['jpg', 'png', 'gif'])}
      />
    )
  }
  )
