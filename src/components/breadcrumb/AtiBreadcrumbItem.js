import React from 'react'
import { Breadcrumb } from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
const AtiBreadcrumbItem = ({ children, href, style }) => {
  return (
    <Breadcrumb.Item href={href} style={style}>
      {children}
    </Breadcrumb.Item>
  )
}

AtiBreadcrumbItem.propTypes = {
  /**
     * property href attribute specifies the URL of the page the link goes to.
     */
  href: PropTypes.string,

  children: PropTypes.element,

  style: PropTypes.string
}

export default AtiBreadcrumbItem
