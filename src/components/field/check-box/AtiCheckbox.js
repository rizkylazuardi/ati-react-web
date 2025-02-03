import React, {Component} from 'react';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { withReduxForm } from 'ati-reduxform-web';

class AtiCheckbox extends Component {
    /*
    * typechecking PocketCheckbox
    */
    static propTypes = {
      /**
         * Checkbox style
         */
      style: PropTypes.string,
      /**
         * get focus when component mounted
         */
      autoFocus: PropTypes.bool,
      /**
         * Disable checkbox
         */
      disabled: PropTypes.bool,
      /**
         * flag true / false that indicate checkbox will checked or not
         */
      checked: PropTypes.bool,
      /**
         * checkbox value
         */
      value: PropTypes.string,
      /**
         * css class name
         */
      className: PropTypes.string,
      /**
         * childern of checkbox
         */
      children: PropTypes.any,
      /**
         * onChange : callback function execute when checkbox has changed
         */
      events: PropTypes.shape({
        onChange: PropTypes.func
      }),
      indeterminate: PropTypes.bool,
      /**
         * Specifies the initial state: whether or not the checkbox is selected.
         */
      defaultChecked: PropTypes.bool

    }

    static defaultProps = {
      // checked: false,
      events: {},
      indeterminate: false
    }

    onChange = (e) => {
      this.props.events.onChange(e.target.checked)
    }

    render() {
      const {indeterminate, style, value, disabled, className, autoFocus, events, defaultChecked, checked, children} = this.props
      //    const checkedAttr = checked ? {checked:true} : {};
      return (
        <React.Fragment>
          <Checkbox
            value={value}
            disabled={!!disabled}
            autoFocus={!!autoFocus}
            onChange={events.onChange}
            style={style}
            indeterminate={indeterminate}
            className={className}
            checked={checked}
            defaultChecked={defaultChecked}
          >
            {children}
          </Checkbox>
        </React.Fragment>
      )
    }
}
export default withReduxForm(AtiCheckbox);
