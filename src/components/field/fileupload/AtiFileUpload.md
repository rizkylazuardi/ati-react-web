# AtiTextbox

## General

Base component that for use to help Upload file by selecting or dragging components.
this component is instead of [Ant Design Upload](https://ant.design/components/upload/).

## When To Use

Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

    * When you need to upload one or more files.

    * When you need to show the process of uploading.

    * When you need to upload files by dragging and dropping.

## Example

### `Sample Default`
remove the attribute `showError` from AtiTextBox component
```js
<AtiFileUpload
    type='button'
    listType='text'
    action='http://localhost:8080/upload' 
    multiple={true}

/>
```

### `Avatar`

```js
<AtiFileUpload
    type='avatar'
    listType="picture-card" 
    action='http://localhost:8080/upload' 
    multiple={true}
/>
```


### `Dragable`

```js
<AtiFileUpload
    type='drag'
    multiple={true}
    events={
        {
            onChange: (file) => {
                console.log(file);
            },
            beforeUpload: (file) => {
                /*this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }));*/
                return false;
            }    
        }
    }
/>
```