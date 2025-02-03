import React from 'react';
import { InputGroup, Input, FormGroup, Label, InputGroupAddon } from 'reactstrap';
import PropTypes from 'prop-types';
import * as v from 'voca';
import { withAuthority } from 'dtt-web-security';
import { withReduxForm } from 'ati-reduxform-web';
/**
 * @author rizky.lazuardi
 * @description this component only used for input only using reactstrap.
 * @version 1.0
 */
const AtiTextbox = (
  {id, name, type, label, className, placeholder, size, inputLength, readonly, disabled,
    value, validation, showError, events, onChange, onBlur,
    onKeyUp, onFocus, containerStyle, required, defaultValue = '',
    addonPlacement, addon,
  }) => {
  const requiredLabel = required ? <span style={{color: 'red', fontStyle: 'italic'}}>*</span> : null;
  const labelRender = v.isEmpty(label) ? null : <Label for={name}>{label} {requiredLabel}</Label>
  const validAttr = (showError == null) ? {} : !showError ? {valid: true} : {invalid: true}
  const readonlyAttr = readonly ? {readOnly: 'readonly'} : {}
  const disabledAttr = disabled ? {disabled: 'true'} : {}
  const addonLeft = addonPlacement === 'left';
  return (
    <FormGroup style={containerStyle}>
      {labelRender}
      <InputGroup>
      {
        addonLeft && addon &&
        <InputGroupAddon addonType="prepend">
          { addon }
        </InputGroupAddon>
      }
      <Input type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`${className}`}
        value={value}
        onChange={events.onChange}
        onKeyUp={events.onKeyUp}
        onFocus={events.onFocus}
        onBlur={events.onBlur}
        onKeyPress={events.onKeyPress}
        defaultValue={defaultValue}
        {...validAttr}
        {...readonlyAttr}
        {...disabledAttr}
        bsSize={size} maxLength={inputLength.max} minLength={inputLength.min}
      />
      {
        !addonLeft && addon &&
        <InputGroupAddon addonType="prepend">
          { addon }
        </InputGroupAddon>
      }
      </InputGroup>
    </FormGroup>
  )
}

AtiTextbox.defaultProps = {
  size: 'md',
  inputLength: {},
  events: {},
  required: false,
  hasStar: false,
  addonPlacement: 'right',
}

/*
 * typechecking Textbox
 */
AtiTextbox.propTypes = {
  /**
     * element id of textbox
     */
  id: PropTypes.string.isRequired,
  /**
     * element name of textbox
     */
  name: PropTypes.string.isRequired,
  /**
     * element type of textbox (text,password,email)
     */
  type: PropTypes.string.isRequired,
  /**
     * textbox label
     */
  label: PropTypes.string,
  /**
     * textbox additional / custom css class name
     */
  className: PropTypes.string,
  /**
     * textbox placeholder text
     */
  placeholder: PropTypes.string,
  /**
     * element size (sm, lg, md (default) )
     */
  size: PropTypes.string,
  /**
     * text value of textbox
     */
  value: PropTypes.string,
  /**
     * textbox minimum and maximal length, use json object (example : inputLength={{min:5,max:10}})
     */
  inputLength: PropTypes.object,
  /**
     * flag to indicate the textfield is valid or not (true=valid,false=invalid,blank=not yet validate)
     */
  showError: PropTypes.bool,
  /**
     * function when the textbox change
     */
  onChange: PropTypes.func,
  /**
     * function when the textbox has lost focus
     */
  onBlur: PropTypes.func,
  /**
     * function when user input in textbox
     */
  onKeyUp: PropTypes.func,
  /**
     * function when textbox focused
     */
  onFocus: PropTypes.func,
  events: PropTypes.shape(
    {
      onChange: PropTypes.func,
      onBlur: PropTypes.func,
      onKeyUp: PropTypes.func,
      onFocus: PropTypes.func
    }
  ),
  containerStyle: PropTypes.object,
  required: PropTypes.bool,
  addonPlacement: PropTypes.string,
}
export default withAuthority(withReduxForm(AtiTextbox))
