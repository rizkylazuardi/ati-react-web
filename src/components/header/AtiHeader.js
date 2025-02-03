import {Layout} from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
const {Header} = Layout

/**
 * @author runy.novitasari
 * @since June, June 6, 2018
 * @description component for the header of a page.
 * @version 1.0
 */

const AtiHeader = ({className, style, children}) => {
  return (
    <Header style={style} className={className}>
      {children}
    </Header>
  )
}

AtiHeader.defaultProps = {
  style: {
    color: 'black'
  }
}

AtiHeader.propTypes = {
  /**
     * to customize the styles
     */
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.element
}

export default AtiHeader
