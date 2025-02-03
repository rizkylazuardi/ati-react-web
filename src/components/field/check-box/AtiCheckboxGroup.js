import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'antd'
import {withReduxForm} from 'ati-reduxform-web'

class AtiCheckboxGroup extends Component {
    static propTypes = {
      /**
         * data source for check box choice
         */
      dataSource: PropTypes.arrayOf(PropTypes.string).isRequired,
      /**
         * set childern of the checkbox group
         */
      children: PropTypes.any,
      /**
         * set default value of the checkbox group
         */
      defaultValue: PropTypes.arrayOf(PropTypes.string),
      /**
         * set  value of the checkbox group
         */
      value: PropTypes.arrayOf(PropTypes.string),
      /**
         * onChange Function(checkedValue) : The callback function that is triggered when the state changes.
         */
      events: PropTypes.shape({
        onChange: PropTypes.func
      })
    }

    static defaultProps = {
      events: {}
    }

    handleOnChange = (onChange) => {
      const {events} = this.props
      return (values) => {
        if (events.onChange) {
          events.onChange(values)
        }
        if (onChange) {
          onChange(values)
        }
      }
    }

    render() {
      const {dataSource, children, defaultValue, value, events} = this.props
      const CheckboxGroup = Checkbox.Group
      const optionsAttr = dataSource ? {options: dataSource} : {}
      const _children = dataSource ? null : children
      const defaultValueAttr = defaultValue ? {defaultValue} : {}
      const valueAttr = value ? {value} : {}
      return (
        <CheckboxGroup
          {...optionsAttr}
          {...defaultValueAttr}
          {...valueAttr}
          onChange={events.onChange}
          // indeterminate = {indeterminate}
        >
          {_children}
        </CheckboxGroup>
      )
    }
}

export default withReduxForm(AtiCheckboxGroup)
