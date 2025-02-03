import React, {Component} from 'react'
import { Upload, message, Button, Icon, Modal } from 'antd'
import * as StringUtils from 'voca'
import 'antd/dist/antd.css'
import PropTypes from 'prop-types'

const Dragger = Upload.Dragger
class AtiFileUpload extends Component {
    static defaultProps = {
      type: 'button',
      iconButton: 'upload',
      buttonText: 'Upload',
      listType: 'text',
      className: '',
      action: '',
      showUploadList: true,
      events: {},
      multiple: false,
      fileList: [],
      limit: 0
    }

    static propTypes = {
      /**
         * type of file upload (button | avatar | drag)
         */
      type: PropTypes.string,
      /**
         * icon type on upload button
         */
      iconButton: PropTypes.string,
      /**
         * text of upload button
         */
      buttonText: PropTypes.string,
      /**
         * Built-in stylesheets, support for three types: text, picture or picture-card
         */
      listType: PropTypes.string,
      /**
         * custom upload css class name
         */
      className: PropTypes.string,
      /**
         * Whether to show default upload list, could be an object to specify showPreviewIcon and showRemoveIcon individually
         */
      showUploadList: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
          showPreviewIcon: PropTypes.bool,
          showRemoveIcon: PropTypes.bool
        })
      ]),
      /**
         * Required. Uploading URL
         */
      action: PropTypes.string.isRequired,
      /**
         * beforeUpload : Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned. Warning：this function is not supported in IE9。
         * onChange : A callback function, can be executed when uploading state is changing
         * onPreview : A callback function, will be executed when file link or preview icon is clicked.
         * onRemove : A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject
         */
      events: PropTypes.shape({
        beforeUpload: PropTypes.func,
        onChange: PropTypes.func,
        onPreview: PropTypes.func,
        onRemove: PropTypes.func
      }),
      /**
         * Whether to support selected multiple file. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true
         */
      multiple: PropTypes.bool,
      /**
         * flag that indicate the component will auto upload after picking image or manual upload
         */
      autoUpload: PropTypes.bool,
      limit: PropTypes.number,
      acceptType: PropTypes.string
    }

    state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [],
    }

    componentWillMount() {
      const { fileList } = this.props;
      if (fileList) this.setState({ fileList: [...fileList] });
    }

    componentWillUpdate(nextProps) {
      if (nextProps.fileList !== this.props.fileList) {
          this.updateFileList(nextProps.fileList);
      }
    }

    uploadButton = () => {
      const {buttonText} = this.props
      return (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} />
          <div className='ant-upload-text'>{buttonText}</div>
        </div>
      )
    }

    handleBeforeUpload = (file) => {
      const { events } = this.props;
      if (events.beforeUpload) { events.beforeUpload(file) }
    }

    handleChange = (info) => {
      console.log(info);
      const {limit, events, maxSize, allowedExtension} = this.props
      let fileList = info.fileList
      // validate limit
      if (limit !== 0 && fileList.length > limit) {
        message.warning('upload ' + info.file.name + ' failed, there is only ' + limit + ' number of file you can upload.')
        return false
      }

      // validate size
      if (maxSize) {
        if (info.file.size > maxSize) { // byte
          message.warning('upload ' + info.file.name + ' failed, Maximum file size is ' + maxSize + ' bytes.')
          return false
        }
      }

      // validate type
      if (!StringUtils.isEmpty(allowedExtension)) {
        let validExt = false
        const name = info.file.name
        allowedExtension.forEach(function(ext) {
          if (name.split('.')[1].toLowerCase() === ext) {
            validExt = true
          }
        })
        if (!validExt) {
          message.warning('Format ' + name.split('.')[1] + ' not allowed.')
          return false
        }
      }

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      /* fileList = fileList.slice(-2);

        // 2. read from response and show file link
        fileList = fileList.map((file) => {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }
          return file;
        });

        // 3. filter successfully uploaded files according to response from server
        fileList = fileList.filter((file) => {
          if (file.response) {
            return file.response.status === 'success';
          }
          return true;
        }); */

      
      if (events.onChange) { 
        events.onChange(info) 
      } else {
        this.setState({...this.state, fileList})
      }
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true
      })
    }

    getModalPreview = () => {
      return (
        <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt='download' style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>
      )
    }

    updateFileList = (fileList) => {
      this.setState({ fileList: [...fileList] });
    }

    render() {
      const {type, action, listType, name, showUploadList, multiple, iconButton,
        buttonText, className, customRequest, acceptType,
        data, headers, events, renderUploadButton } = this.props
      const customRequestAttr = customRequest === null ? {} : {customRequest}
      const acceptAttr = acceptType ? {accept: acceptType} : {}
      if (type === 'button') {
        return (
          <Upload
            {...this.props}
            name={name}
            listType={listType}
            className={`${className}`}
            showUploadList={showUploadList}
            action={action}
            onRemove={events.onRemove}
            multiple={multiple}
            onPreview={this.handlePreview}
            beforeUpload={events.beforeUpload}
            onChange={this.handleChange}
            fileList={this.state.fileList}
            {...acceptAttr}
          >
            { renderUploadButton || 
              <Button>
                <Icon type={iconButton} /> {buttonText}
              </Button>
            }
          </Upload>
        )
      } else if (type === 'avatar') {
        return (
          <div className='clearfix'>
            <Upload
              {...this.props}
              name={name}
              listType={listType}
              className={`avatar-uploader ${className}`}
              showUploadList={showUploadList}
              action={action}
              multiple={multiple}
              beforeUpload={events.beforeUpload}
              onRemove={events.onRemove}
              onChange={this.handleChange}
              onPreview={this.handlePreview}
              fileList={this.state.fileList}
              {...acceptAttr}
            >
              {
                renderUploadButton || this.uploadButton()
              }
            </Upload>
            {this.getModalPreview()}
          </div>
        )
      } else { // dragg
        return (
          <div className='clearfix'>
            <Dragger
              {...this.props}
              name={name}
              listType={listType}
              className={`${className}`}
              showUploadList={showUploadList}
              action={action}
              beforeUpload={events.beforeUpload}
              onChange={this.handleChange}
              onRemove={events.onRemove}
              multiple={multiple}
              onPreview={this.handlePreview}
              fileList={this.state.fileList}
              {...acceptAttr}
              {...customRequestAttr}
              {...data}
              headers={headers}
            >
              <p className='ant-upload-drag-icon'>
                <Icon type='inbox' />
              </p>
              <p className='ant-upload-text'>Click or drag file to this area to upload</p>
              <p className='ant-upload-hint'>Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
            </Dragger>
            {this.getModalPreview()}
          </div>
        )
      }
    }
}

export default AtiFileUpload
