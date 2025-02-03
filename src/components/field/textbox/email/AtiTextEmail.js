import React from 'react'
import { withReduxForm } from 'ati-reduxform-web';
import AtiInputWithMask from './../mask/AtiInputWithMask'
import emailMask from 'text-mask-addons/dist/emailMask'
import PropTypes from 'prop-types'
import './AtiTextEmail.css'
/**
 * @author akbar.wijayanto
 *
 * @version 1.0
 * @since April, 2018
 *
 * Component for email format. ex : akbar.wijayanto@anabatic.com
 * Use emailMask addons to masking the input text with email format
 *
 * ==========
 * HOW TO USE
 * ==========
 * <AtiTextEmail value={this.state.email}
        onChange={value => this.setState({ value })}/>
 *
 */
const AtiTextEmail = ({
  id,
  guide,
  placeholder,
  style,
  className,
  name,
  placeholderChar,
  events,
  value,
  required,
  containerStyle,
}) => {
  let classStyle = (className == null) ? 'default-css' : className

  return (
    <AtiInputWithMask
      id={id}
      name={name}
      style={style}
      className={classStyle}
      mask={emailMask}
      guide={guide}
      placeholder={placeholder}
      placeholderChar={placeholderChar}
      events={
        {
          onBlur: events.onBlur
        }
      }
      required={required}
      containerStyle={containerStyle}
      value={value}
    />
  )
}

AtiTextEmail.defaultProps = {
  required: false,
  containerStyle: {},
};


/*
 * Component validator to validate that the value of attributes is correct
 *
 */
AtiTextEmail.propTypes = {
  /**
     * uniqe key for the component
     */
  id: PropTypes.string.isRequired,
  /**
     * name for the component
     */
  name: PropTypes.string.isRequired,
  /**
     * guide or no guide mode
     */
  guide: PropTypes.bool,
  /**
     * specifies a short hint that describes the expected value of an input field
     */
  placeholder: PropTypes.string,
  /**
     * represents the fillable spot in the mask. The default placeholder character is underscore ( _ )
     */
  placeholderChar: PropTypes.string,
  style: PropTypes.string,
  className: PropTypes.string,
  events: PropTypes.object,
  value: PropTypes.string,
  required: PropTypes.bool,
  containerStyle: PropTypes.object,
}

export default withReduxForm(AtiTextEmail);
