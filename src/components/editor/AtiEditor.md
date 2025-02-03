# AtiEditor

## General

Base component that for use to help create content editor with HTML format
this component is instead of [react-draft-wysiwyg](https://jpuri.github.io/react-draft-wysiwyg/#/docs).

## When To Use

    * Can be used to create email / cms content


## Example

### `Sample Default`
```js
<AtiEditor
                toolbarClassName='toolbarClassName'
                wrapperClassName='wrapperClassName'
                editorClassName='editorClassName'
                        events={
                            {
                                onContentChange: (data) => {
                                    console.log(data);
                                }
                            }
                        }
                    />
```

