import React from 'react'
import PropTypes from 'prop-types'
import Notification from 'react-web-notification'
import {message} from 'antd'

class AtiBrowserNotification extends React.Component {
    handlePermissionGranted = () => {
      message.info('Permission Granted')
    }
    handlePermissionDenied = () => {
      message.info('Permission Denied')
    }
    handleNotSupported = () => {
      message.info('Web Notification not Supported')
    }

    handleNotificationOnClick = (e, tag) => {
      message.info('Notification clicked tag:' + tag)
    }

    handleNotificationOnError = (e, tag) => {
      message.info('Notification error tag:' + tag)
    }

    handleNotificationOnClose = (e, tag) => {
      message.info('Notification closed tag:' + tag)
    }

    handleNotificationOnShow = (e, tag) => {
      this.playSound()
      message.info('Notification shown tag:' + tag)
    }
    playSound = () => {
      const {audio} = this.props
      if (audio !== undefined && audio !== null) {
        document.getElementById(audio.id).play()
      }
    }

    renderAudio = () => {
      const {audio} = this.props
      if (audio !== undefined && audio !== null) {
        return (
          <audio id={audio.id} preload='auto'>
            <source src={audio.src} type={audio.type} />
            <embed hidden='true' autostart='false' loop='false' src={audio.src} />
          </audio>
        )
      }
    }

    componentDidMount() {
      const {title, options, ignore, disableActiveWindow, askAgain} = this.props
    }

    render() {
      const {events, timeout, title, options, ignore, disableActiveWindow, askAgain} = this.props

      const notSupported = events != null && events.onNotSupported != null ? events.onNotSupported : this.handleNotSupported
      const onPermissionGranted = events != null && events.onPermissionGranted != null ? events.onPermissionGranted : this.handlePermissionGranted
      const onPermissionDenied = events != null && events.onPermissionDenied != null ? events.onPermissionDenied : this.handlePermissionDenied
      const onShow = events != null && events.onShow != null ? events.onShow : this.handleNotificationOnShow
      const onClick = events != null && events.onClick != null ? events.onClick : this.handleNotificationOnClick
      const onClose = events != null && events.onClose != null ? events.onClose : this.handleNotificationOnClose
      const onError = events != null && events.onError != null ? events.onError : this.handleNotificationOnError

      return (
        <div>
          <Notification
            ignore={ignore}
            disableActiveWindow={disableActiveWindow}
            askAgain={askAgain}
            notSupported={notSupported}
            onPermissionGranted={onPermissionGranted}
            onPermissionDenied={onPermissionDenied}
            onShow={onShow}
            onClick={onClick}
            onClose={onClose}
            onError={onError}
            timeout={timeout}
            title={title}
            options={options}
          />
          {this.renderAudio()}
        </div>
      )
    }
}

AtiBrowserNotification.defaultProps = {
  title: '',
  timeout: 5000,
  ignore: true,
  disableActiveWindow: false,
  askAgain: false,
  events: {}
}

AtiBrowserNotification.propTypes = {
  /**
     * Available options
     * See https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification
     */
  options: PropTypes.object.isRequired,
  /**
     * Audio (Almost all browser can't play it)
     */
  audio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }),
  /**
     * if true, nothing will be happen
     */
  ignore: PropTypes.bool.isRequired,
  /**
     * if true, nothing will be happen when window is active
     */
  disableActiveWindow: PropTypes.bool,
  /**
     * if true, window.Notification.requestPermission will be called on componentDidMount, even if it was denied before
     */
  askAgain: PropTypes.bool,
  /**
     * Notification title.
     */
  title: PropTypes.string.isRequired,
  /**
     * milli sec to close notification automatically.(Default 5000)
     */
  timeout: PropTypes.number.isRequired,
  /**
     * notSupported() : Called when HTML5 Web Notification API is not supported.
     * onPermissionGranted() : Called when permission granted.
     * onPermissionDenied() : Called when permission denied. Notification will do nothing until permission granted again.
     * onShow(e, tag) : Called when Desktop notification is shown.
     * onClick(e, tag) : Called when Desktop notification is clicked.
     * onClose(e, tag) : Called when Desktop notification is closed.
     * onError(e, tag) : Called when Desktop notification happen error.
     */
  events: PropTypes.shape({
    onNotSupported: PropTypes.func,
    onPermissionGranted: PropTypes.func,
    onPermissionDenied: PropTypes.func,
    onShow: PropTypes.func,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    onError: PropTypes.func
  })
}

export default AtiBrowserNotification
