import React from 'react'
import AtiModals from './../modals/AtiModals'
import AtiButton from './../button/AtiButton'
import PropTypes from 'prop-types'
import { Label } from 'reactstrap'

const AtiConfirmBox = ({
  isOpen, name, textStyle, bodyClassName, footerClassName, text,
  buttonConfirmStyle, buttonConfirmColor, buttonCancelStyle, buttonCancelColor,
  confirmButtonText, cancelButtonText, events, children
}) => {
  return (
    <AtiModals
      isOpen={isOpen}
      footer={
        <div>
          <AtiButton text={confirmButtonText} size='sm' color={buttonConfirmColor}
            events={
              {onClick: events.onConfirm}
            }
          /> &nbsp;
          <AtiButton text={cancelButtonText} size='sm' color={buttonCancelColor}
            events={
              {onClick: events.onCancel}
            }
          />
        </div>
      }
      footerClassName={footerClassName}
      backdrop={true}
      size='sm'
      zIndex={1000}
      bodyClassName={bodyClassName}
      modalClassName={'backgroundModalClasName'}
    >
      <Label style={textStyle}>{text}</Label>
    </AtiModals>
  )
}

AtiConfirmBox.defaultProps = {
  bodyClassName: '',
  footerClassName: '',
  buttonConfirmColor: 'success',
  buttonCancelColor: 'danger',
  confirmButtonText: 'Yes',
  cancelButtonText: 'Cancel',
  events: {}
}

AtiConfirmBox.propTypes = {
  /**
     * Flag to indicate the modal confirmation will be show (true) / hide (false)
     */
  isOpen: PropTypes.bool,
  /**
     * Confirmation text
     */
  text: PropTypes.string,
  /**
     * text confirmation custom style
     */
  textStyle: PropTypes.object,
  /**
     * custom css className of body confirmation box(container)
     */
  bodyClassName: PropTypes.string,
  /**
     * custom css className of footer confirmation box(container)
     */
  footerClassName: PropTypes.string,
  /**
     * custom css style of confirm button
     */
  buttonConfirmStyle: PropTypes.object,
  /**
     * custom color of confirm button
     */
  buttonConfirmColor: PropTypes.string,
  /**
     * custom css style of cancel button
     */
  buttonCancelStyle: PropTypes.object,
  /**
     * custom color of cancel button
     */
  buttonCancelColor: PropTypes.string,
  /**
     * confirmation events:  onConfirm and onCancel button event
     */
  events: PropTypes.shape({
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }),
  /**
     * text of confirm button
     */
  confirmButtonText: PropTypes.string,
  /**
     * text of cancel button
     */
  cancelButtonText: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.element
}

export default AtiConfirmBox
