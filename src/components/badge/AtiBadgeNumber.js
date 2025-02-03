import React from 'react'
import {Badge} from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
/**
 * @author hosea.simanjuntak
 * @description Small numerical value descriptor for UI elements.
 * @version 1.0
 */

const AtiBadgeNumber = ({count, offset, overflowCount, showZero, title, className, children, style}) => {
  return (
    <Badge
      title={title}
      count={count}
      offset={offset}
      overflowCount={overflowCount}
      showZero={showZero}
      style={style}
      className={`${className}`}
    >
      {children}
    </Badge>
  )
}

AtiBadgeNumber.defaultProps = {
  overflowCount: 99,
  showZero: false
}

AtiBadgeNumber.PropTypes = {
  /**
     * Number to show in badge
     */
  count: PropTypes.number.isRequired,
  /**
     * set offset of the badge dot, like[x, y]. '[number, number]'
     */
  offset: PropTypes.arrayOf(PropTypes.number),
  /**
     * Max count to show
     */
  overflowCount: PropTypes.number,
  /**
     * Whether to show badge when count is zero
     */
  showZero: PropTypes.bool,
  /**
     * If status is set, text sets the display text of the status dot
     */
  title: PropTypes.string,
  /**
   * child element
   */
  children: PropTypes.any,
}

export default AtiBadgeNumber
