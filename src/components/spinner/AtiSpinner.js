import React, {Component} from 'react'
import {Spin} from 'antd'
import PropTypes from 'prop-types'

/**
 * @author runy.novitasari
 * @since Tuesday, June 5, 2018
 * @description component for displaying loading state of a page or a section.
 * @version 1.0
 */

// const AtiSpinner = ({
//     delay,
//     size,
//     spinning,
//     tip,
//     indicatorStyle,
//     iconName,
//     childern
// }) => {

//     const indicator = <Icon type={iconName} style={indicatorStyle}/>
//     const indicatorAttr = StringUtils.isEmpty(iconName)?{}:{indicator};
//     return (
//         <Spin
//             size={size}
//             {...indicatorAttr}
//             spinning={spinning}
//             delay={delay}
//             tip={tip}
//             >
//             {childern}
//         </Spin>
//     )
// };

class AtiSpinner extends Component {
  render() {
    const { size, spinning, delay, tip, indicator, wrapperClassName } = this.props

    return (
      <Spin
        size={size}
        spinning={spinning}
        delay={delay}
        tip={tip}
        indicator={indicator}
        wrapperClassName={wrapperClassName}
      >
        {this.props.children}
      </Spin>
    )
  }
}

AtiSpinner.defaultProps = {
  size: 'default',
  spinning: true,
  indicator: null,
  wrapperClassName: '',
}

AtiSpinner.propTypes = {
  /**
     * specifies a delay in milliseconds for loading state (prevent flush)
     * number (milliseconds)
     */
  delay: PropTypes.number,

  /**
     * size of component AtiSpinner, options: small, default and large
     */
  size: PropTypes.oneOf(['small', 'default', 'large']),

  /**
     * whether Spin is spinning. By default the value is true
     */
  spinning: PropTypes.bool,

  /**
     * customize description content when Spin has children
     */
  tip: PropTypes.string,

  /**
   * React node of the spinning indicator, Use custom loading indicator.
   */
  indicator: PropTypes.content,
  children: PropTypes.element,
  wrapperClassName: PropTypes.string
}

export default AtiSpinner
