import React from 'react'
import {Radio} from 'antd'
import PropTypes from 'prop-types'

const AtiRadioItem = (props) => {
  return (
    <React.Fragment>
      <Radio {...props}>
        {props.children}
      </Radio>
    </React.Fragment>
  )
}

AtiRadioItem.propTypes = {
  /**
     * get focus when component mounted
     */
  autoFocus: PropTypes.bool,
  /**
     * Specifies whether the radio is selected
     */
  checked: PropTypes.bool,
  /**
     * Specifies the initial state: whether or not the radio is selected.
     */
  defaultChecked: PropTypes.bool,
  /**
     * Disable radio
     */
  disabled: PropTypes.bool,
  /**
     * According to value for comparison, to determine whether the selected
     */
  value: PropTypes.any
}

export default AtiRadioItem
