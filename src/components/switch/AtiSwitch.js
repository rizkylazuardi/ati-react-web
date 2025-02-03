import React from 'react'
import PropTypes from 'prop-types'
import * as StringUtils from 'voca'
import {Switch, Icon} from 'antd'

/**
 * @author runy.novitasari
 * @since Tuesday, June 5, 2018
 * @description Switching Selector.
 * @version 1.0
 */

const AtiSwitch = ({
  autoFocus,
  checked,
  defaultChildren,
  disabled,
  loading,
  size,
  events,
  checkedIconName,
  unCheckedIconName}) => {
  const checkedChildren = <Icon type={checkedIconName} />
  const checkedChildrenAttr = StringUtils.isEmpty(checkedIconName)
    ? {}
    : {
      checkedChildren
    }

  const unCheckedChildren = <Icon type={unCheckedIconName} />
  const unCheckedChildrenAttr = StringUtils.isEmpty(unCheckedIconName)
    ? {}
    : {
      unCheckedChildren
    }

  const loadingAttr = loading ? {loading: true} : {}
  return (
    <div>
      <Switch
        autoFocus={autoFocus}
        checked={checked}
        {...checkedChildrenAttr}
        defaultChildren={defaultChildren}
        disabled={disabled}
        {...loadingAttr}
        size={size}
        {...unCheckedChildrenAttr}
        onChange={events.onChange} />
    </div>
  )
}

AtiSwitch.defaultProps = {
  autoFocus: false,
  checked: false,
  defaultChecked: false,
  disabled: false,
  loading: false,
  size: 'default',
  events: {}
}

AtiSwitch.PropTypes = {

  /**
     * get focus when component mounted
     */
  autoFocus: PropTypes.bool,

  /**
     * determine whether the Switch is checked
     */
  checked: PropTypes.bool,

  /**
     * content to be shown when the state is checked,and can customized with icon
     */
  checkedChildren: PropTypes.string,

  /**
     * to set the initial state
     */
  defaultChecked: PropTypes.bool,

  /**
     * Disable switch
     */
  disabled: PropTypes.bool,

  /**
     * loading state of switch
     */
  loading: PropTypes.bool,

  /**
     * the size of the Switch, options: default small
     */
  size: PropTypes.string,

  /**
     * content to be shown when the state is unchecked,and can customized with icon
     */
  unCheckedChildren: PropTypes.string,

  /* Will be filled with function such as onChange,onBlur,onFocus.
    *  onChange :  a callback function, can be executed when the checked state is changing
    *
    */
  events: PropTypes.shape({

    /**
    * a callback function, can be executed when the checked state is changing
    */
    onChange: PropTypes.func
  })
}

export default AtiSwitch
