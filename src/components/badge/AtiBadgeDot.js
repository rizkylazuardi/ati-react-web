import React from 'react'
import {Badge} from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
/**
 * @author hosea.simanjuntak
 * @description Small status descriptor for UI elements.
 * @version 1.0
 */

const AtiBadgeDot = ({status, text, title, children, show }) => {
  return (
    <Badge title={title} dot={show} text={text} status={status} >
      {children}
    </Badge>
  )
}

AtiBadgeDot.defaultProps = {
  // text:status,
  // title:status
}

AtiBadgeDot.PropTypes = {
  /**
     * Set Badge as a status dot
     */
  status: PropTypes.oneOf(['success', 'processing', 'default', 'error', 'warning']).isRequired,
  /**
     * If status is set, text sets the display text of the status dot
     */
  text: PropTypes.string,
  /**
   * child element
   */
  children: PropTypes.any,
  /**
   * show badge or not
   */
  show: PropTypes.bool.isRequired,
  /**
     * If status is set, text sets the display text of the status dot
     */
  title: PropTypes.string,
  /**
     * set offset of the badge dot, like[x, y]. '[number, number]'
     */
  offset: PropTypes.arrayOf(PropTypes.number)
}

export default AtiBadgeDot
