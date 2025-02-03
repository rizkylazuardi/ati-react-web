import {message} from 'antd'
import PropTypes from 'prop-types'

const defaultProps = {
  type: 'success',
  duration: 4
}

const AtiMessage = (props) => {
  const newProps = Object.assign(defaultProps, props)
  message[newProps.type](newProps.message, newProps.duration)
}

AtiMessage.propTypes = {
  /**
   * toast type
   */
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  /**
   * message that will be see in the toast
   */
  message: PropTypes.string.isRequired,
  /**
   * duration of the toast/message
   */
  duration: PropTypes.number
}

export default AtiMessage
