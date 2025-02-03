import React, { Component } from 'react';
import { Popconfirm } from 'antd';
import PropTypes from 'prop-types';

class AtiPopConfirm extends Component {
    static propTypes = {
      /**
         * title of the confirmation box
         */
      textConfirm: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
      /**
         * tooltip / popover position (topLeft | top | topRight | leftTop | left | leftBottom | rightTop
         * | right | rightBottom | bottomLeft | bottom |  bottomRight)
         */
      placement: PropTypes.oneOf(['topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom', 'rightTop',
        'right', 'rightBottom', 'bottomLeft', 'bottom', 'bottomRight']),
      /**
         * text of the Confirm button
         */
      okText: PropTypes.string,
      /**
         * text of the Cancel button
         */
      cancelText: PropTypes.string,
      /**
         * confirmation events : onConfirm & onCancel
         */
      events: PropTypes.shape({
        onConfirm: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
      }),
      children: PropTypes.element.isRequired,
      icon: PropTypes.element.isRequired,
    }
    
    static defaultProps = {
      events: {},
      okText: 'Yes',
      cancelText: 'Cancel',
      placement: 'top',
    }

    render() {
      const {
 textConfirm, events, okText, cancelText, children, placement, icon,
} = this.props;
      return (
        <Popconfirm
          {...this.props}
          title={textConfirm}
          onConfirm={events.onConfirm}
          onCancel={events.onCancel}
          okText={okText}
          cancelText={cancelText}
          placement={placement}
          icon={icon}
          onVisibleChange={events.onVisibleChange}
        >
          {children}
        </Popconfirm>
      );
    }
}

export default AtiPopConfirm;
