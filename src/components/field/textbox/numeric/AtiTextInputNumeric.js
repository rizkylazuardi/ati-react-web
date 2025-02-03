import React from 'react'
import { withReduxForm } from 'ati-reduxform-web';
import {FormGroup, Label} from 'reactstrap'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import './TextInputNumeric.css'
import * as v from 'voca'
/**
 * @author ahlul.esasjana
 * @version 1.0
 *
 * Text field component for numeric only
 * This component can use to handle input like amount of transaction, number of queue and etc.
 * You can use navigate up and down on keyboard to increasing or decreasing value
 *
 * ==========
 * How to use
 * ==========
 * Simple use => <TextInputNumeric />
 * Add custom precision => <TextInputNumeric precision='5' />
 * For amount use =>  <TextInputNumeric currency="true" />
 *
 * ==========
 * Properties
 * ==========
 * @param {*} value  :
 * @param {*} precision  :  maximum precision of field (default was 9)
 * @param {*} currency  :  Flag to set this field is used for amount or number (default = true)
 * @param {*} scale : Show how long number can be input as decimal value
 * @param {*} id : element id of textbox
 * @param {*} name : element name of textbox
 * @param {*} label : textbox label
 * @param {*} className : custom class style if you want it
 */
class AtiTextInputNumeric extends React.Component {
    precision = null;

    state = {
      currentValue: ''
    }

    // ======= Additional Function ========

    /**
     * This function using to validate size of input textfield based on maximum precision of field
     * @param {*} precision  : maxium precision of field
     */
    onchange=(e) => {
      const {value} = e.target
      let val = value.split(',').join('').split('.')[0]
      if (val.precision > this.props.precision) {
        this.setState({...this.state})
        return
      }
      this.setState({currentValue: value})
      if (this.props.events.onItemsChanged != null) {
        this.props.events.onItemsChanged(e)
      }
    }

    onValueChange = (value) => {
      const {events} = this.props;
      delete value.floatValue
      if (events && events.onValueChange)events.onValueChange(value);
    }

    render() {
      const {
        id,
        name,
        events,
        label,
        prefix,
        suffix,
        displayType,
        renderText,
        format,
        mask,
        placeholder,
        thousandSeparator,
        required,
        containerStyle,
        value,
      } = this.props;
      const precision = (this.props.precision == null) ? 9 : this.props.precision;
      const classStyle = (this.props.className == null) ? 'text-input-numeric' : this.props.className;
      const scaling = (this.props.scale == null) ? 0 : this.props.scale;
      const requiredLabel = required ? <span style={{ color: 'red', fontStyle: 'italic' }}>*</span> : null;
      const labelRender = v.isEmpty(label) ? null : <Label for={name}>{label} {requiredLabel}</Label>;
      const onchange = events !== null && events.onChange !== null ? events.onchange : this.onchange;
      return (
        <FormGroup style={containerStyle}>
          {labelRender}
          <NumberFormat
            id={id}
            name={name}
            onChange={onchange}
            onValueChange={this.onValueChange}
            value={value ? this.props.value : this.props.defaultValue}
            prefix={prefix}
            suffix={suffix}
            displayType={displayType}
            renderText={renderText}
            format={format}
            mask={mask}
            placeholder={placeholder}
            thousandSeparator={thousandSeparator}
            allowNegative={false}
            className={`form-control ${classStyle}`}
            decimalScale={scaling}
            precision={precision}
          />
        </FormGroup>
      );
    }
}

AtiTextInputNumeric.defaultProps = {
  events: {},
  required: false,
  hasStar: false,
}

AtiTextInputNumeric.propTypes = {
  /**
     * id of the input
     */
  id: PropTypes.string.isRequired,
  /**
     * name of the input
     */
  name: PropTypes.string.isRequired,
  /**
     * className to change the style of the input
     */
  className: PropTypes.string,
  /**
     * prefix
     */
  prefix: PropTypes.string,
  /**
     * suffix
     */
  suffix: PropTypes.string,
  /**
     * format
     */
  format: PropTypes.string,
  /**
     * mask
     */
  mask: PropTypes.string,
  /**
     * placeholder text
     */
  placeholder: PropTypes.string,
  /**
     * display type. can choose text or input
     */
  displayType: PropTypes.oneOf(['text', 'input']),
  /**
     * Thousand Seperator can either be true or any string value
     */
  thousandSeparator: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
     * Label of the input. can either be element or string
     */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
     * render text
     */
  renderText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
     * confirmation events : onImageLoaded, onComplete
     * onChange (e) : A callback which happens after a some changes.
     * onValueChange(value,e) : A callback which happens after a some changes in value.
     */
  events: PropTypes.shape({
    onChange: PropTypes.func,
    onValueChange: PropTypes.func,
    onItemsChanged: PropTypes.func
  }),
  containerStyle: PropTypes.object,
  precision: PropTypes.number,
  scale: PropTypes.number,
  required: PropTypes.bool,
}

export default withReduxForm(AtiTextInputNumeric)
