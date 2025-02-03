import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs/react'
import { withReadme } from 'storybook-readme'
import AtiEditor from './AtiEditor'
import AtiEditorMd from './AtiEditor.md'

storiesOf('Editor', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => <div style={{padding: '20px'}}>{getStory()}</div>)
  .addDecorator(withReadme(AtiEditorMd))
  .addWithDoc('Default', AtiEditor, null, () => {
    return (
      <AtiEditor
        toolbarClassName={text('toolbarClassName')}
        wrapperClassName={text('wrapperClassName')}
        editorClassName={text('editorClassName')}
        events={
          {
            onContentChange: (data) => {
              //console.log(data)
            }
          }
        }
      />

    )
  }
  )
