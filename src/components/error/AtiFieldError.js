import React, {Component} from 'react'
import { AtiFieldContext } from 'ati-reduxform-web'
import AtiErrorMessage from './AtiErrorMessage'
import * as StringUtils from 'voca'

class AtiFieldError extends Component {
  render() {
    const {style} = this.props
    return (
      <AtiFieldContext.Consumer>
        {(context) => {
          if (!StringUtils.isEmpty(context.error) && (context.touched || !context.pristine)) {
            return (
              <AtiErrorMessage style={style}>
                <span style={{marginLeft: '5px'}}>{context.error}</span>
              </AtiErrorMessage>
            )
          } else {
            return (
              <span />
            )
          }
        }}
      </AtiFieldContext.Consumer>
    )
  }
}

export default AtiFieldError
