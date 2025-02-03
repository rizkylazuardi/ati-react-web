import {Layout} from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
const {Footer} = Layout

/**
 * @author runy.novitasari
 * @since June, June 6, 2018
 * @description component for the Footer of a page.
 * @version 1.0
 */

const AtiFooter = ({className, style, children}) => {
  return (
    <Footer style={style} className={className}>
      {children}
    </Footer>
  )
}
/*
AtiFooter.defaultProps = {
} */

AtiFooter.propTypes = {
  /**
     * container className
     */
  className: PropTypes.string,

  /**
     * to customize the styles
     */
  style: PropTypes.object,
  children: PropTypes.element
}

export default AtiFooter
