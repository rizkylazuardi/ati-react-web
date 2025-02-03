import React, {Component} from 'react'
import {Icon} from 'antd'
import PropTypes from 'prop-types'

const defaultStyle = {
  color: 'red',
  display: 'inline-block',
  fontSize: '13px',
  lineHeight: '15px',
  margin: '5px 0 0',
 }

export default class AtiErrorMessage extends Component {
  static propTypes = {
    children: PropTypes.element,
    style: PropTypes.object
  }

  static defaultProps = {
    style: Object.assign({}, defaultStyle)
  }

  render() {
    const {children, style} = this.props
    const customStyle = style ? { ...style } : {};
    const containerStyle = { ...defaultStyle, ...customStyle };
    return (
      // <span style={{color: 'red', display: 'flex', marginTop: '32px'}}>
      <span style={containerStyle}>
        <Icon type='close-circle' theme='filled' />
        {children}
      </span>
    )
  }
}
