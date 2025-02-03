import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { withAuthority } from 'dtt-web-security';
import * as v from 'voca';

/**
 * @author rizky.lazuardi
 * @description this component  used to create button element using reactstrap. 
 * @version 1.0
 */

const AtiButton = (props) => {
    const blockAttr = props.block ? {block: true} : {}
    const disabledAttr = props.disabled ? {disabled: true} : {}
  return (
    <Button
      id={props.id}
      name={props.name}
      onClick={props.events.onClick}
      {...blockAttr}
      {...disabledAttr}
      {...props}
    >
      {props.text}
    </Button>
  );
};

AtiButton.defaultProps = {
  size: 'default',
  htmlType: 'button',
  type: 'primary',
  ghost: false,
  loading: false,
  events: { onClick: () => {} }
};

AtiButton.propTypes = {
  /**
     * element id of AtiButton Component
     */
  id: PropTypes.string.isRequired,
  /**
     * element name of AtiButton Component
     */
  name: PropTypes.string.isRequired,
  /**
     * element value of AtiButton Component
     */
  value: PropTypes.string,
  /**
     * plain text of AtiButton
     */
  text: PropTypes.string.isRequired,
  /**
     * element size of AtiButton
     * possible options : sm, md, lg
     */
  size: PropTypes.string,
  /**
     * flag that indicates the type of button using outline style or not
     */
  outline: PropTypes.bool,
  /**
     * flag that indicates the type of button using block style or not
     * true  : button akan memenuhi container pembungkus (width 100%)
     */
  block: PropTypes.bool,
  /**
     * flag that indicates the button component disabled (true) or enabled (false)
     */
  disabled: PropTypes.bool,
  /**
     * additional css classname, just put your custom css class here
     */
  className: PropTypes.string,
  /**
     * Button type, options : button , submit
     */
  type: PropTypes.string,
  events: PropTypes.shape({ onClick: PropTypes.func }),
};

export default withAuthority(AtiButton);
