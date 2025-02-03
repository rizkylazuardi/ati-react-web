import React from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * @author rizky.lazuardi
 * @description component for create element alert message
 * @version 1.0
 */

const AtiAlertBox = ({
  id, color, message, children, closable, className, isOpen, onToggle,
}) => {
  const toggleAttr = closable == null || !closable ? {} : { toggle: onToggle };
  return (
    <div>
      <Alert
        isOpen={isOpen}
        className={className}
        {...toggleAttr}
        color={color == null ? 'danger' : color}
      >
        {message} {children}
      </Alert>
    </div>
  )
}

AtiAlertBox.defaultProps = {
  color: 'danger',
  closable: false
}

AtiAlertBox.propTypes = {
  /**
     * Element id of AtiAlertBox component
     */
  id: PropTypes.string,
  /**
     * bootstrap color of AtiAlertBox
     * possible option :primary, secondary, succcess, danger, warning, info, light, dark
     */
  color: PropTypes.string,
  /**
     * alert message that will show inside the box
     */
  message: PropTypes.string,
  /**
     * flag to indicate the alert box has a close button (true) or not (false)
     */
  closable: PropTypes.bool,
  /**
     * additional css classname, just put your custom css class here
     */
  className: PropTypes.string,
  /**
     * function that handle when the close button clicked
     * this attribute is required when the closable property is set True
     */
  onToggle: PropTypes.func,
  /**
     * flag that indicate the alert box state to show (true) or hide (false)
     */
  isOpen: PropTypes.bool,
  children: PropTypes.element
}

export default AtiAlertBox
