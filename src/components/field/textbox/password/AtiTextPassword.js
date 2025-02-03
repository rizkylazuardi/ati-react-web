import React from 'react';
import { withReduxForm } from 'ati-reduxform-web';
import PasswordMask from 'react-password-mask';
import PropTypes from 'prop-types';
import { ButtonStyle, ButtonSize } from './AtiTextPasswordStyle';
import * as v from 'voca'
import { FormGroup, Label } from 'reactstrap'
import './AtiTextPassword.css';
// import Image from 'react-image';
import showImage from './show.png';
import hideImage from './hide.png';
/**
 * @author akbar.wijayanto
 *
 * Text field component with password masking.
 * This component be able to show and hide the value. Use react state to pass the value to component props.
 *
 * ==========
 * HOW TO USE
 * ==========
 * <AtiTextPassword id='txtPassword'
        value={this.state.password}
        onChange={value => this.setState({ value })} ></AtiTextPassword>
 *
 * @version 1.0
 */
const AtiTextPassword = ({
  value,
  label,
  id,
  name,
  placeholder,
  style,
  className,
  required,
  containerStyle,
  events,
}) => {
  const classStyle = (className == null) ? 'default-css' : className;
  const requiredLabel = required ? <span style={{color: 'red', fontStyle: 'italic'}}>*</span> : null;
  const labelRender = v.isEmpty(label) ? null : <Label for={name}>{label} {requiredLabel}</Label>
  return (
    <FormGroup style={containerStyle}>
      {labelRender}
      <PasswordMask
        id={id}
        name={name} // must be use the 'password' value for password text field
        value={value}
        placeholder={placeholder}
        onChange={events.onChange}
        style={style}
        inputClassName={classStyle}
        buttonStyles={ButtonStyle}
        showButtonContent={<img src={showImage} style={ButtonSize} />}
        hideButtonContent={<img src={hideImage} style={ButtonSize} />}
        userVendorStyles={false}
      />
    </FormGroup>
  )
}

/*
 * Component validator to validate that the value of attributes is correct
 *
 */
AtiTextPassword.propTypes = {
  /**
     * uniqe key for the component
     */
  id: PropTypes.string.isRequired,
  /**
     * specifies a short hint that describes the expected value of an input field
     */
  placeholder: PropTypes.string,
  /**
     * value the component
     */
  value: PropTypes.string,
  /**
     * event when the value of an element has been changed
     */
  onChange: PropTypes.func,
  style: PropTypes.string,
  className: PropTypes.string,

  containerStyle: PropTypes.object,
  events: PropTypes.object,
  required: PropTypes.bool,
}

export default withReduxForm(AtiTextPassword);
