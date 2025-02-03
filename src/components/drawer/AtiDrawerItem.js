import React from 'react'
import PropTypes from 'prop-types'

const AtiDrawerItem = (props) => {
  return (
    <React.Fragment>
      <div>
        {props.children}
      </div>
    </React.Fragment>
  )
}

AtiDrawerItem.propTypes = {
  children: PropTypes.element
}

export default AtiDrawerItem
