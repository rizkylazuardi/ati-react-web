import React, {Component} from 'react'
import { TimePicker, Button } from 'antd'
import PropTypes from 'prop-types'

class AtiTimePicker extends Component {
    state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      value: null,
      open: false,
      text: null
    }

    static propTypes = {
      /**
         allow clearing text
         */
      allowEmpty: PropTypes.bool,

      /**
         get focus when component mounted
         */
      autoFocus: PropTypes.bool,

      /**
         className of picker
         */
      className: PropTypes.string,

      /**
         clear tooltip of icon
         */
      clearText: PropTypes.string,

      /**
         default open panel value, used to set utcOffset,locale if value/defaultValue absent
         */
      defaultOpenValue: PropTypes.moment,

      /**
         to set default time
         */
      defaultValue: PropTypes.moment,

      /**
         determine whether the TimePicker is disabled
         */
      disabled: PropTypes.bool,

      /**
         to specify the hours that cannot be selected
         */
      disabledHours: PropTypes.func,

      /**
         to specify the minutes that cannot be selected
         function(selectedHour)
         */
      disabledMinutes: PropTypes.func,

      /**
         to specify the seconds that cannot be selected
         function(selectedHour, selectedMinute)
         */
      disabledSeconds: PropTypes.func,

      /**
         to set the time format
         */
      format: PropTypes.string,

      /**
         to set the container of the floating layer, while the default is to create a div element in body
         function(trigger)
         */
      getPopupContainer: PropTypes.func,

      /**
         hide the options that can not be selected
         */
      hideDisabledOptions: PropTypes.bool,

      /**
         interval between hours in picker
         */
      hourStep: PropTypes.number,

      /**
         Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)
         */
      inputReadOnly: PropTypes.bool,

      /**
         interval between minutes in picker
         */
      minuteStep: PropTypes.number,

      /**
         display when there's no value
         */
      placeholder: PropTypes.string,

      /**
         className of panel
         */
      popupClassName: PropTypes.string,

      /**
         interval between seconds in picker
         */
      secondStep: PropTypes.number,

      /**
         display as 12 hours format, with default format h:mm:ss a
         */
      use12Hours: PropTypes.bool,

      /**
         to set time
         */
      value: PropTypes.moment,

      events: PropTypes.shape(
        {
          // onChange = (time, timeString) => {
          //     console.log(time, timeString);
          //     this.setState({ value: time, text : timeString });
          //   }
          /**
         a callback function, can be executed when the selected time is changing
         function(time: moment, timeString: string): void
         */
          onChange: PropTypes.object,

          /**
         a callback function which will be called while panel opening/closing
         (open: boolean): void
         */
          onOpenChange: PropTypes.object
        }),
      size: PropTypes.number
    }

    handleOpenChange = (open) => {
      this.setState({ open })
    }

    handleClose = () => this.setState({ open: false })

    render() {
      const {
        events, size, disabled, format, minuteStep, secondStep, use12Hours, allowEmpty, autoFocus,
        className, clearText, defaultOpenValue, defaultValue,
        disabledHours, disabledSeconds, disabledMinutes, getPopupContainer, hideDisabledOptions,
        hourStep, inputReadOnly, placeholder, popupClassName
      } = this.props
      return (
        <TimePicker
          value={this.props.value}
          onChange={events.onChange}
          open={this.state.open}
          onOpenChange={this.handleOpenChange}
          size={size}
          disabled={disabled}
          format={format}
          minuteStep={minuteStep}
          secondStep={secondStep}
          use12Hours={use12Hours}
          // defaultValue = {moment(moment().format('LT'), "HH:mm")}
          // moment().format('LT') used for get current time with format "HH:mm"
          // moment().format('LTS') used for get current time with format "HH:mm:ss"

          allowEmpty={allowEmpty} autoFocus={autoFocus} className={className} clearText={clearText}
          defaultOpenValue={defaultOpenValue} defaultValue={defaultValue} disabledHours={disabledHours}
          disabledSeconds={disabledSeconds} disabledMinutes={disabledMinutes} getPopupContainer={getPopupContainer} hideDisabledOptions={hideDisabledOptions}
          hourStep={hourStep} inputReadOnly={inputReadOnly} placeholder={placeholder} popupClassName={popupClassName}

          addon={() => (
            <Button size='small' type='primary' onClick={this.handleClose}>
                        Ok
            </Button>
          )}
        />
      )
    }
}

export default AtiTimePicker
