import React from 'react'
import {BackTop} from 'antd'
import PropTypes from 'prop-types'
import * as v from 'voca'
import 'antd/dist/antd.css'

/**
 * @author hosea.simanjuntak
 * @description makes it easy to go back to the top of the page.
 * @version 1.0
 */

const AtiBackTop = ({childern, visibilityHeight, onClick}) => {
  const childernRender = childern !== undefined && childern !== null ? childern : null
  return (
    <BackTop visibilityHeight={visibilityHeight} onClick={onClick}>
      {childernRender}
    </BackTop>
  )
}

AtiBackTop.defaultProps = {
  visibilityHeight: 400
}

AtiBackTop.propTypes = {
  /**
     * Child element to be show when doesn't want the default BackTop button
     */
  childern: PropTypes.element,
  /**
     * the BackTop button will not show until the scroll height reaches this value
     */
  visibilityHeight: PropTypes.number,
  /**
     * a callback function, which can be executed when you click the button
     */
  onClick: PropTypes.func
}

export default AtiBackTop
