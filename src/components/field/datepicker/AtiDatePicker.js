import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import {FormGroup, Label} from 'reactstrap'
import * as v from 'voca'
import PropTypes from 'prop-types'
import {withReduxForm} from 'ati-reduxform-web'

/**
 * @author runy.novitasari
 *
 * @version 1.0
 *
 * <AtiDatePicker/>
 * Datepicker is a graphical user interface widget which allows the user to select a date from a calendar and/or time from a time range.
 *
 */

const AtiDatePicker = ({showError, dateFormat, timeFormat, locale, value, disableOnClickOutside, validDate, asInput, events,
  inputClassName, groupClassName, placeholder, readonly, closeOnSelect, label, required, containerStyle, defaultValue, ...rest }) => {
  const showErrorClassName = v.isEmpty(showError) ? '' : showError ? 'is-invalid' : 'is-valid'
  const labelRender = v.isEmpty(label) ? null : <Label for={label}>{label}</Label>;
  const requiredLabel = required ? <span style={{color: 'red', fontStyle: 'italic'}}>*</span> : null;
  return (
    <FormGroup className={groupClassName} style={containerStyle}>
      {labelRender} {requiredLabel}
      <Datetime
        {...rest}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        locale={locale}
        value={value}
        input={asInput}
        disableOnClickOutside={disableOnClickOutside}
        isValidDate={validDate}
        onChange={events.onDateChange}
        onBlur={events.onBlur}
        onFocus={events.onFocus}
        closeOnSelect={closeOnSelect}
        defaultValue={defaultValue}
        inputProps={{ ...rest.inputProps, placeholder, label: 'datepicker', readOnly: readonly, className: `form-control ${showErrorClassName} ${inputClassName}`}}
      />
    </FormGroup>
  )
}

AtiDatePicker.defaultProps = {
  dateFormat: 'YYYY-DD-MM',
  timeFormat: false,
  asInput: true,
  inputClassName: '',
  groupClassName: '',
  closeOnSelect: true,
  disableOnClickOutside: false,
  locale: null,
  events: {},
  required: false,
  containerStyle: {},
}

AtiDatePicker.propTypes = {
  /**
 * Label for component Datepicker
 */
  label: PropTypes.string,
  /**
 * flag to indicate the datepicker is valid or not (true=valid,false=invalid,blank=not yet validate)
 */
  showError: PropTypes.bool,

  /**
   * Defines the format for the date. It accepts any Moment.js
date format (not in localized format). If true the date will be displayed using the defaults for the current locale.
If false the datepicker is disabled and the component can be used as timepicker.
example : dateFormat="YYYY-DD-MM" or dateFormat="YYYY/DD/MM"
*/
  dateFormat: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  /**
 * Defines the format for the time. It accepts any Moment.js time format (not in localized format).
 If true the time will be displayed using the defaults for the current locale.
If false the timepicker is disabled and the component can be used as datepicker
*/
  timeFormat: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),

  /**
 * Manually set the locale for the react-datetime instance. Moment.js locale needs to be loaded to be used.
 *
 */
  locale: PropTypes.string,

  /**
* Represents the selected date by the component, in order to use it as a controlled component.
This prop is parsed by Moment.js, so it is possible to use a date string or a moment object.
*/
  value: PropTypes.string,

  /**
* Whether to show an input field to edit the date manually. */
  asInput: PropTypes.bool.isRequired,

  /**
* When true, keep the datepicker open when click event is triggered outside of component. When false, close it. */
  disableOnClickOutside: PropTypes.bool,

  /**
* Define the dates that can be selected. The function receives (currentDate, selectedDate) and shall return a true
or false whether the currentDate is valid or not. */
  validDate: PropTypes.func,

  /**
*  Will be filled with function such as onChange,onBlur,onFocus.
*  onChange : Callback trigger when the date changes. The callback receives the selected moment object as only parameter,
*  moment return such as moment.day() or moment.days() or moment.dates().Moment#day is for the day of the week.Moment#date is for the date of the month,
*  onBlur  : Callback trigger for when the user clicks outside of the input, simulating a regular onBlur.
*  moment return such as moment.day() or moment.days() or moment.dates().Moment#day is for the day of the week.Moment#date is for the date of the month,
*  onFocus : Callback trigger for when the user opens the datepicker. The callback receives an event of type SyntheticEvent.
*  moment return such as moment.day() or moment.days() or moment.dates().Moment#day is for the day of the week.Moment#date is for the date of the month,
*/
  events: PropTypes.shape(
    {
      /**
 * Callback trigger when the date changes. The callback receives the selected moment object as only parameter,
 * moment return such as moment.day() or moment.days() or moment.dates().Moment#day is for the day of the week.Moment#date is for the date of the month
 */
    onDateChange: PropTypes.func,

      /**
 * Callback trigger for when the user clicks outside of the input, simulating a regular onBlur.
 */
      onBlur: PropTypes.func,

      /**
Callback trigger for when the user opens the datepicker. The callback receives an event of type SyntheticEvent.
*/
      onFocus: PropTypes.func
    }),

  /**
*a string that will be the input's placeholder text. */
  placeholder: PropTypes.string,

  /**
*flag to indicate the text area component's readonly or not */
  readonly: PropTypes.bool,

  /**
*When true, once the day has been selected, the datepicker will be automatically closed.
*/
  closeOnSelect: PropTypes.bool,

  /**
 *  An optional className for group component of the datepicker element.
 */
  groupClassName: PropTypes.string,

  /**
 *  An optional className for input component of the datepicker element.
 */
  inputClassName: PropTypes.string,
  required: PropTypes.bool,
  containerStyle: PropTypes.object,
}

export default withReduxForm(AtiDatePicker);
