import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs/react'
import AtiTree from './AtiTree'
import AtiTreeItem from './AtiTreeItem'
import { withReadme } from 'storybook-readme'
import AtiTreeMd from './AtiTree.md'

storiesOf('Tree', module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(AtiTreeMd))
  .addDecorator(getStory => <div style={{padding: '50px'}}>{getStory()}</div>)
  .addWithDoc('Simple', AtiTree, null, () => {
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      }

    const dataSource = [
        {title: "parent 1", key: "0-0",
            child: [
                {title: "parent 1-0", key: "0-0-0",
                    child: [
                        {title: "child 1-0-0", key: "0-1-0"},
                        {title: "child 1-0-1", key: "0-1-1",
                            child: [
                                {title: "child 1-0-0-1", key: "0-1-0-1"},
                                {title: "child 1-0-0-2", key: "0-1-0-2"},
                            ]
                        },        
                    ]
                },       
                {title: "child 2", key: "0-0-1"},
                {title: "child 3", key: "0-0-2"},
                {title: "child 4", key: "0-0-3"}
            ]
        },
        {title: "parent 2", key: "0-1"}
    ]
    return (
        <AtiTree
            showLine
            defaultExpandedKeys={['0-1-1']}
            events={
                { onSelect }
            }
            dataSource={dataSource}
        >
        </AtiTree>
    )
  }
  )
