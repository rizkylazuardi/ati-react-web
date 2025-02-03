import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import PropTypes from 'prop-types'
import * as v from 'voca'

/**
 * @author runy.novitasari
 *
 * @version 1.0
 *
 * <AtiModals/>
 * This component used for a dialog box/popup window that is displayed on top of the current page.
 */

const AtiModals = (
  {size, header, footer, isOpen, children, className, backdropClassName, wrapClassName, modalClassName, contentClassName, events, backdrop, fade, zIndex, headerClassName, footerClassName, bodyClassName}) => {
  const toggle = events.toggle ? { toggle: events.toggle } : {};
  const headerAttrRender = v.isEmpty(header) ? null : <ModalHeader className={headerClassName} {...toggle} >{header}</ModalHeader>
  const bodyAttrRender = v.isEmpty(children) ? null : <ModalBody className={bodyClassName}>{children}</ModalBody>
  const footerAttrRender = v.isEmpty(footer) ? null : <ModalFooter className={footerClassName}>{footer}</ModalFooter>

  return (
    <div>
      <Modal
        isOpen={isOpen}
        size={size}
        className={className}
        backdropClassName={backdropClassName}
        wrapClassName={wrapClassName}
        modalClassName={modalClassName}
        contentClassName={contentClassName}
        onOpened={events.onOpened}
        onClosed={events.onClosed}
        onExit={events.onExit}
        onEnter={events.onEnter}
        backdrop={backdrop}
        fade={fade}
        zIndex={zIndex}
        headerClassName={headerClassName}
        footerClassName={footerClassName}
        bodyClassName={bodyClassName}
        {...toggle}
      >

        {headerAttrRender}
        {bodyAttrRender}
        {footerAttrRender}
      </Modal>
    </div>
  )
}

AtiModals.defaultProps = {
  events: {},
  fade: true
}

AtiModals.propTypes = {
  /**
    boolean to control the state of the popover
    */
  isOpen: PropTypes.bool.required,

  /**
    corresponds to bootstrap's modal sizes.
    for example :
     size= {"lg"} will display modal with large size
     size={"sm"} will display modal with small size
     size={"md"} will display modal with medium size
     default value modal will filled with medium size.
    */
  size: PropTypes.string,

  /**
     * Backdrop property In you can set two property backdrop = 'static' Clicking outside of model window,model window will not get closed with background will be grayed out. backdrop = 'false' Clicking outside of model window,model window will not get closed but background will not be grayed out. backdrop = 'true' Clicking outside window, model window will get closed
     */
  backdrop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['static'])
  ]),

  /**
     * headerClassName  allows for custom UI header component, such as size header,color,padding, etc.
     */
  headerClassName: PropTypes.string,

  /**
     * bodyClassName  allows for custom UI body component, such as size header,color,padding, etc.
     */
  bodyClassName: PropTypes.string,

  /**
     * footerClassName  allows for custom UI footer component, such as size header,color,padding, etc.
     */
  footerClassName: PropTypes.string,

  /**
     * allows for handle function, such as onClosed,onOpened,onExit,etc
     */
  events: PropTypes.shape(
    {
      /**
          called when done transitioning out
          */
      onClosed: PropTypes.func,

      /**
          called when done transitioning in
          */
      onOpened: PropTypes.func,

      /**
           * called when modal transitioning close
           */
      onExit: PropTypes.func,

      /**
          allows for a node/componet to exist next to the modal (outside of it). Useful for external close buttons
          external: PropTypes.node,
          */
      onEnter: PropTypes.func
    }),

  /**
    To specify a CSS class, use the className attribute. This applies to all regular DOM and SVG elements like <div>, <a>, and others.
    */
  className: PropTypes.string,

  /**
    The class name of the container of the modal dialog
    */
  wrapClassName: PropTypes.string,

  /**
     * An optional className for the modal element.
     */
  modalClassName: PropTypes.string,

  /**
     * An optional className for the backdrop element.
     */
  backdropClassName: PropTypes.string,

  /**
     * An optional className for the content element.
     */
  contentClassName: PropTypes.string,

  /**
    boolean to control whether the fade transition occurs (default: true)
    */
  fade: PropTypes.bool,
  // zIndex defaults to 1000.

  /**
    zIndex controls which components display on top of others. Normally, you don't use zIndex.
    zIndex value defaults to 1000.
    */
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  header: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.element
}

export default AtiModals
