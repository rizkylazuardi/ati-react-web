import React from 'react'
import {Tooltip} from 'antd'
import PropTypes from 'prop-types'

/**
 * @author hosea.simanjuntak
 * @description this component only used to display A simple text popup tip.
 * @version 1.0
 */

class AtiTooltip extends React.Component {
  render() {
    const {title, children, placement, arrowPointAtCenter, autoAdjustOverflow, trigger,
      visibleOnLoad, mouseEnterDelay,
      mouseLeaveDelay, overlayClassName, overlayStyle} = this.props
    return (
      <Tooltip title={title}
        placement={placement}
        arrowPointAtCenter={arrowPointAtCenter}
        trigger={trigger}
        defaultVisible={visibleOnLoad}
        autoAdjustOverflow={autoAdjustOverflow}
        mouseEnterDelay={mouseEnterDelay}
        mouseLeaveDelay={mouseLeaveDelay}
        overlayClassName={overlayClassName}
        overlayStyle={overlayStyle}>
        {children}
      </Tooltip>
    )
  }
}

AtiTooltip.defaultProps = {
  placement: 'top',
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
  trigger: 'hover',
  visibleOnLoad: false,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1
}

AtiTooltip.propTypes = {
  /**
     * text to be displayed in the tooltip
     */
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  /**
     * Place where the tooltip will be put
     */
  children: PropTypes.element.isRequired,
  /**
     * The position of the tooltip relative to the target, which can be one of `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom`
     */
  placement: PropTypes.oneOf(['top', 'left', 'right', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'leftTop', 'leftBottom', 'rightTop', 'rightBottom']),
  /**
     * Whether the arrow is pointed at the center of target
     */
  arrowPointAtCenter: PropTypes.bool,
  /**
     * Whether to adjust popup placement automatically when popup is off screen
     */
  autoAdjustOverflow: PropTypes.bool,
  /**
     * Tooltip trigger mode, can be `hover`,`focus`,`click`,`contextMenu`
     */
  trigger: PropTypes.oneOf(['hover', 'focus', 'click', 'contextMenu']),
  /**
     * Whether the floating tooltip card is visible by default
     */
  visibleOnLoad: PropTypes.bool,
  /**
     * Delay in seconds, before tooltip is shown on mouse enter
     */
  mouseEnterDelay: PropTypes.number,
  /**
     * Delay in seconds, before tooltip is hidden on mouse leave
     */
  mouseLeaveDelay: PropTypes.number,
  /**
     * Class name of the tooltip card
     */
  overlayClassName: PropTypes.string,
  /**
     * Style of the tooltip card
     */
  overlayStyle: PropTypes.object
}

export default AtiTooltip
