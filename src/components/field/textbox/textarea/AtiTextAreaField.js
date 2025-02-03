import React from 'react'
import { withReduxForm } from 'ati-reduxform-web';
import {FormGroup, Label, Input} from 'reactstrap'
import PropTypes from 'prop-types'
import * as v from 'voca'

/**
 *@author runy.novitasari
 *
 * @version 1.0
 * @since April 19,2018
 *
 * <AtiTextAreaField/>
 * This component used represents a multi-line plain-text editing control.
 *
 */

const AtiTextAreaField = ({id, name, rows, style, placeholder, disabled, readonly,
  events, inputClassName, groupClassName, showError, label, required }) => {
  const requiredLabel = required ? <span style={{color: 'red', fontStyle: 'italic'}}>*</span> : null;
  const showErrorAttr = (showError == null) ? {} : showError ? {invalid: true} : {valid: true}
  const readonlyAttr = readonly ? {readonly: 'readonly'} : {}
  const disabledAttr = disabled ? {disabled: 'true'} : {}
  const labelRender = v.isEmpty(label) ? null : <Label for={name}>{label} {requiredLabel}</Label>

  return (
    <FormGroup className={groupClassName} >
      {labelRender}
      <Input type='textarea'
        id={id}
        name={name}
        placeholder={placeholder}
        className={inputClassName}
        rows={rows}
        onChange={events.onChange}
        onBlur={events.onBlur}
        {...showErrorAttr}
        {...readonlyAttr}
        {...disabledAttr}
      />
    </FormGroup>
  )
}

AtiTextAreaField.defaultProps = {
  inputClassName: '',
  groupClassName: '',
  readonly: false,
  disabled: false,
  events: {},
  required: false,

}

/*
* typechecking TextAreaField
*/
AtiTextAreaField.propTypes = {
  /**
   * Label for component textarea
   */
  label: PropTypes.string,
  /**
     * element id of textarea component
     */
  id: PropTypes.string.isRequired,

  /**
     * the name attribute for the textarea.
     */
  name: PropTypes.string.isRequired,

  /**
     * a string that will be the textarea's placeholder text.
     */
  placeholder: PropTypes.string,

  /**
   * flag to indicate the textarea is valid or not (true=valid,false=invalid,blank=not yet validate)
   */
  isValid: PropTypes.bool,

  /**
     * accepts an integer that determines how many rows high the textarea will be.
     */
  rows: PropTypes.number,

  /**
     * attribute to custom component using css
     */
  style: PropTypes.string,

  /**
     * flag to indicate the text area component's disable to edit or not
     */
  disabled: PropTypes.bool,

  /**
     * flag to indicate the text area component's readonly or not
     */
  readonly: PropTypes.bool,

  /**
     * allows for handle function, such as onChange,onBlur,etc
     */
  events: PropTypes.shape(
    {
      /**
           * the function when the  textarea component change
           */
      onChange: PropTypes.object,

      /**
            * the function when the textarea component lost focus
            */
      onBlur: PropTypes.object
    }),

  /**
 *  An optional className for group component of the textarea element.
 */
  groupClassName: PropTypes.string,

  /**
 *  An optional className for input component of the textarea element.
 */
  inputClassName: PropTypes.string,
  required: PropTypes.bool,
}

export default withReduxForm(AtiTextAreaField);
