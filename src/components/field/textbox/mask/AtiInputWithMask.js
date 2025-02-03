import React from 'react'
import { withReduxForm } from 'ati-reduxform-web';
import MaskedTextInput from 'react-text-mask'
import PropTypes from 'prop-types'
import {FormGroup, Label} from 'reactstrap'
import * as v from 'voca'

/**
 * @author akbar.wijayanto
 *
 * @version 1.0
 * @since April, 2018
 *
 * Base component that for use to help create text-based input components with masking support.
 * Using tag <MaskedTextInput/> from git@github.com:text-mask/text-mask.git.
 * that tag is fully compatible with <input/> element. So, we can pass it CSS classes, a placeholder attribute, or even an onBlur handler.
 *
 * ==========
 * HOW TO USE
 * ==========
 * <AtiInputWithMask
        id='id'
        mask={['+','6','2', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,/\d/]}
        guide='true'
        placeholder='Phone Number'
    />

 */
const AtiInputWithMask = ({
  id,
  name,
  mask,
  className,
  placeholder,
  guide,
  keepCharPositions,
  placeholderChar,
  showMask,
  label,
  required,
  containerStyle,
  events,
  value,
}) => {
  const requiredLabel = required ? <span style={{color: 'red', fontStyle: 'italic'}}>*</span> : null;
  const labelRender = v.isEmpty(label) ? null : <Label for={name}>{label} {requiredLabel}</Label>;
  return (
    <FormGroup style={containerStyle}>
      {labelRender}
      <MaskedTextInput
        className={`form-control ${className}`}
        placeholder={placeholder}
        guide={guide}
        id={id}
        name={name}
        mask={mask}
        placeholderChar={placeholderChar}
        keepCharPositions={keepCharPositions}
        showMask={showMask}
        onBlur={events.onBlur}
        onChange={events.onChange}
        value={value} />
    </FormGroup>
  )
}

AtiInputWithMask.defaultProps = {
  guide: false,
  placeholderChar: '_',
  keepCharPositions: false,
  showMask: true
}

/*
 * Component validator to validate that the value of attributes is correct
 */
AtiInputWithMask.propTypes = {
  /**
     * uniqe key for the component
     */
  id: PropTypes.string.isRequired,
  /**
     * name for the component
     */
  name: PropTypes.string.isRequired,
  /**
     * label for the component
     */
  label: PropTypes.string,
  /**
     * is an array or a function that defines how the user input is going to be masked
     */
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func
  ]).isRequired,
  /**
     * specifies a short hint that describes the expected value of an input field
     */
  placeholder: PropTypes.string,
  /**
     * is a boolean that tells the component whether to be in guide or no guide mode
     */
  guide: PropTypes.bool,
  /**
     * the spesific a CSS class
     */
  className: PropTypes.string,
  /**
     * represents the fillable spot in the mask. The default placeholder character is underscore ( _ )
     */
  placeholderChar: PropTypes.string,
  /**
     * changes the general behavior of the Text Mask component
     */
  keepCharPositions: PropTypes.bool,
  /**
     * is a boolean that tells the Text Mask component to display the mask as a placeholder in place of the regular placeholder when the input element value is empty
     */
  showMask: PropTypes.bool,
  /**
     * event when an object loses focus
     */
  onBlur: PropTypes.func,
  /**
   * if required is needed
   */
  required: PropTypes.bool,
  /**
   * Container Style
   */
  containerStyle: PropTypes.object,
  /**
     * allows for handle function
     */
  events: PropTypes.shape(
    {
      /**
                             * event when an object loses focus
                             */
      onBlur: PropTypes.object
    }
  ),

  /**
     * value of this component
     */
  value: PropTypes.string
}

export default withReduxForm(AtiInputWithMask);
