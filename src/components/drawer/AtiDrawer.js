import { Drawer } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import './AtiDrawer.css'

class AtiDrawer extends React.Component {
    static defaultProps = {
      placement: 'right',
      closable: true
    };

    static propTypes = {

      /**
         * Whether a close (x) button is visible on top right of the Drawer dialog or not.
         */
      closable: PropTypes.bool,

      /**
         * Whether to unmount child components on closing drawer or not.
         */
      destroyOnClose: PropTypes.bool,

      /**
         *  Return the mounted node for Drawer.
         */
      getContainer: PropTypes.element,

      /**
         * Whether to show mask or not.
         */
      mask: PropTypes.bool,

      /**
         * Clicking on the mask (area outside the Drawer) to close the Drawer or not.
         */
      maskClosable: PropTypes.bool,

      /**
         * Style for Drawer's mask element.
         */
      maskStyle: PropTypes.object,

      /**
         * Style of floating layer, typically used for adjusting its position.
         */
      style: PropTypes.object,

      /**
         * The title for Drawer.
         */
      title: PropTypes.string,

      /**
         * Whether the Drawer dialog is visible or not.
         */
      visible: PropTypes.bool,

      /**
         *  Width of the Drawer dialog.
         */
      width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

      /**
         *  The class name of the container of the Drawer dialog.
         */
      wrapClassName: PropTypes.string,

      /**
         *  The z-index of the Drawer.
         */
      zIndex: PropTypes.number,

      /**
         *  The placement of the Drawer
         */
      placement: PropTypes.oneOf(['left', 'right']),

      children: PropTypes.any,

      /**
         *  Specify a callback that will be called when a user clicks mask, close button or Cancel button.
         */
      events: PropTypes.shape({
        onClose: PropTypes.func
      })

    }

    onClose = () =>{
      this.props.events.onClose();
    }

    render() {
      const {
        closable, destroyOnClose, getContainer, mask, maskClosable, maskStyle, style, title,
        visible, width, wrapClassName, zIndex, placement, events, children
      } = this.props
      return (

        <Drawer
          title={title}
          placement={placement}
          closable={closable}
          onClose={events.onClose}
          // visible={this.state.visible}
          visible={visible}

          destroyOnClose={destroyOnClose} getContainer={getContainer}
          mask={mask} maskClosable={maskClosable} maskStyle={maskStyle}
          style={style} width={width} className={wrapClassName} zIndex={zIndex}
        >
          {children}
        </Drawer>

      )
    }
}

export default AtiDrawer
