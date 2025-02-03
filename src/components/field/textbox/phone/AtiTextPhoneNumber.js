import React from 'react'
// import InputWithMask from './InputWithMask';
// import {LOCAL} from '../../../properties/MaskingType';
import Phone from 'react-phone-number-input'
import './../../../style/phoneNumber/rrui.css'
import './../../../style/phoneNumber/style.css'
import PropTypes from 'prop-types'

/**
 * @author akbar.wijayanto
 *
 * @version 1.0
 * @since April, 2018
 *
 * Component for Phone Number format. ex : +62 812 990-39695
 * This component will return the country's flag
 *
 * ==========
 * HOW TO USE
 * ==========
 * <AtiTextPhoneNumber
        placeholder="Start typing a phone number"
        value={ this.state.value }
        onChange={ value => this.setState({ value }) }></AtiTextPhoneNumber>
 *
 */
const AtiTextPhoneNumber = ({
  id,
  placeholder,
  // onBlur,
  onChange,
  value,
  name,
  style,
  className,
  events
}) => {
  let classStyle = (className == null) ? 'default-css' : className

  return (
  // ===== OLD =====
  /* <InputWithMask
            id={id}
            mask={LOCAL}
            placeholder={placeholder}
            onBlur={onBlur}
        /> */
    <Phone
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      style={style}
      className={`form-control ${classStyle}`}
      onChange={events.onChange}
    />
  )
}

/*
 * Component validator to validate that the value of attributes is correct
 *
 */
AtiTextPhoneNumber.propTypes = {
  /**
     * uniqe key for the component
     */
  id: PropTypes.string.isRequired,
  /**
     * name for the component
     */
  name: PropTypes.string.isRequired,
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
  events: PropTypes.object
}

export default AtiTextPhoneNumber
