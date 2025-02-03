import React from 'react';
import { TimePicker } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';

class AtiTimePicker extends React.Component {
    render() {
        const { value, open, ...rest } = this.props;
        const timeVal = value !== undefined && value !== null ? { value } : {};
        const openVal = open !== undefined && open !== null ? { open } : {};
        return (
            <TimePicker
                {...openVal}
                {...timeVal}
                {...rest}
            />
        );
    }
}

AtiTimePicker.defaultProps = {
    addon: null,
    allowEmpty: true,
    autoFocus: false,
    className: '',
    clearText: 'clear',
    defaultOpenValue: moment(),
    defaultValue: moment(),
    value: null,
    disabled: false,
    disabledHours: () => {},
    disabledMinutes: () => {},
    disabledSeconds: () => {},
    format: 'HH:mm:ss',
    getPopupContainer: null,
    hideDisabledOptions: false,
    open: null,
    hourStep: 1,
    inputReadOnly: false,
    minuteStep: 1,
    placeholder: 'Select a time',
    popupClassName: '',
    secondStep: 1,
    suffixIcon: null,
    use12Hours: false,
    onChange: null,
    onOpenChange: null,
    size: 'default',
};

AtiTimePicker.propTypes = {
    /**
     * called from timepicker panel to render some addon to its bottom
     * function
     */
    addon: PropTypes.func,
    /**
     * allow clearing text
     */
    allowEmpty: PropTypes.bool,
    /**
     * get focus when component mounted
     */
    autoFocus: PropTypes.bool,
    /**
     * className of picker
     */
    className: PropTypes.string,
    /**
     * clear tooltip of icon
     */
    clearText: PropTypes.string,
    /**
     * default open panel value, used to set utcOffset,locale if value/defaultValue absent
     */
    defaultOpenValue: momentPropTypes.momentObj,
    /**
     * to set default time
     */
    defaultValue: momentPropTypes.momentObj,
    /**
     * get focus when component mounted
     */
    disabled: PropTypes.bool,
     /**
     * to specify the hours that cannot be selected
     * function()
     */
    disabledHours: PropTypes.func,
     /**
     * to specify the minutes that cannot be selected
     * function(selectedHour)
     */
    disabledMinutes: PropTypes.func,
    /**
     * to specify the seconds that cannot be selected
     * function(selectedHour, selectedMinute)
     */
    disabledSeconds: PropTypes.func,
    /**
     * to set the time format
     */
    format: PropTypes.string,
    /**
     * to set the container of the floating layer, while the default is to create a div element in body
     * function(trigger)
     */
    getPopupContainer: PropTypes.func,
    /**
     * hide the options that can not be selected
     */
    hideDisabledOptions: PropTypes.bool,
    /**
     * interval between hours in picker
     */
    hourStep: PropTypes.number,
    /**
     * Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)
     */
    inputReadOnly: PropTypes.bool,
    /**
     * interval between minutes in picker
     */
    minuteStep: PropTypes.number,
    /**
     * whether to popup panel
     */
    open: PropTypes.bool,
    /**
     * display when there's no value
     */
    placeholder: PropTypes.string,
    /**
     * className of panel
     */
    popupClassName: PropTypes.string,
    /**
     * interval between seconds in picker
     */
    secondStep: PropTypes.number,
    /**
     * The custom suffix icon
     */
    suffixIcon: PropTypes.element,
    /**
     * display as 12 hours format, with default format h:mm:ss a
     */
    use12Hours: PropTypes.bool,
    /**
     * to set time
     */
    value: momentPropTypes.momentObj,
    /**
     * size of timepicker
     */
    size: PropTypes.oneOf(['large', 'default', 'small']),
    /**
     * a callback function, can be executed when the selected time is changing
     * function(time: moment, timeString: string): void
     */
    onChange: PropTypes.func,
    /**
     * a callback function which will be called while panel opening/closing
     * function(open: boolean): void
     */
    onOpenChange: PropTypes.func,
};

export default AtiTimePicker;
