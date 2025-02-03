import React, {Component} from 'react';
import {Radio} from 'antd';
import PropTypes from 'prop-types';
import { withReduxForm } from 'ati-reduxform-web';

const RadioGroup = Radio.Group

class AtiRadioButton extends Component {
    static propTypes = {
      /**
         * Default selected value
         */
      defaultValue: PropTypes.any,
      /**
         * Disable all radio buttons
         */
      disabled: PropTypes.bool,
      /**
         * The name property of all input[type="radio"] children
         */
      name: PropTypes.string,
      /**
         * set children optional
         */
      options: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
      /**
         * size for radio button style
         */
      size: PropTypes.oneOf(['large', 'default', 'small']),
      /**
         * Used for setting the currently selected value.
         */
      value: PropTypes.any,
      /**
         * style type of radio button
         */
      buttonStyle: PropTypes.oneOf(['outline', 'solid']),
      events: PropTypes.object,
      children: PropTypes.element
    }

    handleChange = (value) => {
      const { onChange } = this.props.events;
      if (onChange) { onChange(value) }
    }

    render() {
      const {defaultValue, disabled, name, options, size, value, events, buttonStyle, children} = this.props

      return (
        <RadioGroup
          defaultValue={defaultValue}
          disabled={disabled}
          name={name}
          options={options}
          size={size}
          value={value}
          onChange={this.handleChange}
          buttonStyle={buttonStyle}
        >
          {children}
        </RadioGroup>
      )
    }
}

export default withReduxForm(AtiRadioButton);
