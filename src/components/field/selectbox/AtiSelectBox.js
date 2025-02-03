import React, {Component} from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { FormGroup, Label } from 'reactstrap'
import * as v from 'voca'
import PropTypes from 'prop-types'
import {withReduxForm} from 'ati-reduxform-web'
import { withAuthority } from 'dtt-web-security';
/**
 * @author rizky.lazuardi
 * @description : this component only used to create selectbox element
 * @version : v 1.0
 *
 */

class AtiSelectBox extends Component {
      
      handleChange = (selectedOption) => {
        const { onItemChanged } = this.props.events;
        if (onItemChanged) { onItemChanged(selectedOption) }
      }

      /* componentDidUpdate(prevProps, prevState, snapshot){
        console.log(snapshot);
        console.log(prevProps);
      } */

      render() {
        const { id, name, label, data, placeholder, className, disabled, clearable, containerStyle,
          showSpinner, noResultText, searchable, value, multi, events, defaultValue } = this.props;
        const {labelKey = 'label', valueKey = 'value'} = this.props;
        const labelRender = v.isEmpty(label) ? null : <Label for={name}>{label}</Label>
        const valueAttr = value ? { value } : {};
        return (
          <FormGroup style={containerStyle}>
            {labelRender}
            <Select
              {...this.props}
              id={id}
              name={name}
              {...valueAttr}
              onChange={this.handleChange}
              onBlur={events.onBlur}
              options={data}
              placeholder={placeholder}
              className={`${className}`}
              isLoading={!!showSpinner}
              searchable={searchable == null ? true : (!!searchable)}
              disabled={!!disabled}
              labelKey={labelKey}
              valueKey={valueKey}
              clearable={clearable}
              multi={!!multi}
              noResultsText={noResultText}
              defaultValue={defaultValue}
            />
          </FormGroup>
        )
      }
}

/*
 * typechecking SelectBox
 */
AtiSelectBox.propTypes = {
  /**
   * element id of SelectBox
   */
  id: PropTypes.string.isRequired,
  /**
   * element name of SelectBox
   */
  name: PropTypes.string.isRequired,
  /**
   * SelectBox label
   */
  label: PropTypes.string,
  /**
   * SelectBox additional/custom css class name
   */
  className: PropTypes.string,
  /**
   * SelectBox placeholder text
   */
  placeholder: PropTypes.string,
  /**
   * object(json) that will store as <option> list,
   * default format using "label" and "value attribute" => {label:"myLabel",value:"myValue"}
   */
  data: PropTypes.array,
  /**
   * flag that indicate the selectbox component is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * data value of SelectBox
   * contain object if attribute multi is false
   * contain array of object if attribute multi is true
   */
  /* value:PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
  ]), */
  /**
   * object (json) contain all event of SelectBox component
   * available event you can use is onItemChanged
   */
  events: PropTypes.shape({
    onItemChanged: PropTypes.func.isRequired
  }),
  /**
   * flag that indicate the spinner is shown or not
   */
  showSpinner: PropTypes.bool,
  /**
   * contain text that will be show when search result data was not found
   */
  noResultText: PropTypes.string,
  /**
   * flag that indicate the selectbox cal be multiple choise or not
   */
  multi: PropTypes.bool,
  /**
   * key of object on variable data that will be mapped as selectbox option label
   */
  labelKey: PropTypes.string,
  /**
   * key of object on variable data that will be mapped as selectbox option value
   */
  valueKey: PropTypes.string,
  /**
   * flag that indicate the searchbox component have a data search fitur or not
   */
  searchable: PropTypes.bool,
  /**
   * flag that indicate the option item of selectbox can be clear or not
   */
  clearable: PropTypes.bool,
  value: PropTypes.string,
  containerStyle: PropTypes.object,
}

export default withAuthority(withReduxForm(AtiSelectBox))
