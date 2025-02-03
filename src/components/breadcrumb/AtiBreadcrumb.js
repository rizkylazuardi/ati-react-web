import React from 'react'
import { Breadcrumb } from 'antd'
import PropTypes from 'prop-types'
import 'antd/dist/antd.css'
import AtiBreadcrumbItem from './AtiBreadcrumbItem'

const AtiBreadcrumb = ({children, separator, style, dataSource}) => {
  const renderComponent = () => {
    if (dataSource.length > 0) {
      return (
        <Breadcrumb separator={separator} style={style}>
          {dataSource.map((item, i) => {
            return (
              <AtiBreadcrumbItem href={item.url} style={item.style}>
                {item.component}
              </AtiBreadcrumbItem>
            )
          })}
        </Breadcrumb>
      )
    }

    return (
      <Breadcrumb separator={separator} style={style}>
        {children}
      </Breadcrumb>
    )
  }

  return (
    renderComponent()
  )
}

AtiBreadcrumb.defaultProps = {
  dataSource: []
}

AtiBreadcrumb.propTypes = {
  /**
  * property separator can be customized by setting the separator property: separator=">".
  */
  separator: PropTypes.string,
  /**
  * component that will be shown on the breadcrumb
  */
  children: PropTypes.element,
  /**
  * style of the breadcrumb component
  */
  style: PropTypes.object,
  /**
  * data that will be render on the breadcrumbs. Object consist of url, style, and component
  */
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      style: PropTypes.object,
      component: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    })
  )
}

export default AtiBreadcrumb
