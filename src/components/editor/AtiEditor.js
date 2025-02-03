import React, {Component} from 'react'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'
import PropTypes from 'prop-types'

class AtiEditor extends Component {
    state = {
      editorState: EditorState.createEmpty()
    }

    static defaultProps = {
      events: {}
    }

    static propTypes = {
      /**
         * onContentChange : callback function executed when the editor content has changed
         * uploadImageCallBack : callback function executed when upload image from local storage
         */
      events: PropTypes.shape({
        onContentChange: PropTypes.func,
        uploadImageCallBack: PropTypes.func
      }),
      /**
         * toolbar class name
         */
      toolbarClassName: PropTypes.string,
      /**
         * wrapper classname
         */
      wrapperClassName: PropTypes.string,
      /**
         * editor class name
         */
      editorClassName: PropTypes.string
    }

    onEditorStateChange= (editorState) => {
      const {events} = this.props
      this.setState({
        editorState
      })
      if (events.onContentChange) {
        const contentText = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        events.onContentChange(contentText)
      }
    };

    uploadImageCallBack = (file) => {
      return new Promise(
        (resolve, reject) => {
          const xhr = new XMLHttpRequest()
          xhr.open('POST', 'https://api.imgur.com/3/image')
          xhr.setRequestHeader('Authorization', 'Client-ID 8168f37af050f8e')
          const data = new FormData()
          data.append('image', file)
          xhr.send(data)
          xhr.addEventListener('load', () => {
            const response = JSON.parse(xhr.responseText)
            resolve(response)
          })
          xhr.addEventListener('error', () => {
            const error = JSON.parse(xhr.responseText)
            reject(error)
          })
        }
      )
    }

    handleImageUpload = (file) => {
      const {events} = this.props
      if (events.uploadImageCallBack) {
        return events.uploadImageCallBack(file)
      } else {
        return this.uploadImageCallBack(file)
      }
    }

    render() {
      const {toolbarClassName, wrapperClassName, editorClassName} = this.props
      return (
        <Editor
          editorState={this.state.editorState}
          toolbarClassName={`toolbarClassName ${toolbarClassName}`}
          wrapperClassName={`wrapper-editor ${wrapperClassName}`}
          editorClassName={`editor-content ${editorClassName}`}
          onEditorStateChange={this.onEditorStateChange}
          toolbar={
            {
              image: { uploadCallback: this.handleImageUpload, alt: { present: true, mandatory: true } }
            }
          }
        />
      )
    }
}

export default AtiEditor
