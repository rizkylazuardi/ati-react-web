import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import 'react-big-calendar/lib/css/react-big-calendar.css';

/**
 * @author hosea.simanjuntak
 * @description this component only used to display content related to a single subject
 * @version 1.0
 */

class AtiCalendar extends React.Component {
  render() {
    const { momentLocalizer, onNavigate, date, ...rest } = this.props;
    const localizer = BigCalendar.momentLocalizer(momentLocalizer);
    const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
    const handleNavigate = onNavigate !== null ? { onNavigate } : {};
    const calendarDate = date !== null ? { date } : {};
    return (
        <BigCalendar
            localizer={localizer}
            views={allViews}
            {...calendarDate}
            {...handleNavigate}
            {...rest}
        />
    );
    }
}

AtiCalendar.defaultProps = {
    momentLocalizer: moment,
    elementProps: {},
    date: null,
    defaultView: BigCalendar.Views.MONTH,
    events: [],
    titleAccessor: 'title',
    tooltipAccessor: 'title',
    allDayAccessor: 'allDay',
    onNavigate: null,
    onView: null,
    onDrillDown: null,
    onRangeChange: null,
    onSelectSlot: ({ start, end }) => {console.log(`${start} - ${end}`)},
    onSelectEvent: (event) => {console.log(event.title)},
    step: 30,
    min: null,
    max: null,
};

AtiCalendar.propTypes = {
    /**
     * calendar localizer
     */
    momentLocalizer: momentPropTypes.momentObj,
    /**
     * Props passed to main calendar <div>
     */
    elementProps: PropTypes.object,
    /**
     * The current date value of the calendar. Determines the visible view range
     * If date is omitted then the result of getNow is used; otherwise the current date is used.
     */
    date: PropTypes.instanceOf(Date),
    /**
     * The initial view set for the Calendar
     */
    defaultView: PropTypes.oneOf([BigCalendar.Views.MONTH,BigCalendar.Views.WEEK,BigCalendar.Views.WORK_WEEK,BigCalendar.Views.DAY,BigCalendar.Views.AGENDA]),
    /**
     * An array of event objects to display on the calendar
     * Events objects can be any shape, as long as the Calendar knows how to retrieve the following details of the event
     */
    events: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        start: PropTypes.instanceOf(Date).isRequired,
        end: PropTypes.instanceOf(Date).isRequired,
        allDay: PropTypes.bool.isRequired,
        resource: PropTypes.any,
    })),
    /**
     * Accessor for the event title, used to display event information. Should resolve to a renderable value
     * string | (event: Object) => string
     */
    titleAccessor: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    /**
     * Accessor for the event tooltip. Should resolve to a renderable value 
     * Removes the tooltip if null
     * string | (event: Object) => string
     */
    tooltipAccessor: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    /**
     * Determines whether the event should be considered an "all day" event and ignore time 
     * Must resolve to a boolean value
     * string | (event: Object) => boolean
     */
    allDayAccessor: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    /**
     * Determines whether the event should be considered an "all day" event and ignore time 
     * Must resolve to a boolean value
     * string | (event: Object) => boolean
     */
    allDayAccessor: PropTypes.oneOfType([PropTypes.func,PropTypes.string]),
    /**
     * Callback fired when the date value changes
     */
    onNavigate: PropTypes.func,
    /**
     * Callback fired when the view value changes
     */
    onView: PropTypes.func,
    /**
     * Callback fired when date header, or the truncated events links are clicked
     */
    onDrillDown: PropTypes.func,
    /**
     * Callback fired when the visible date range changes
     * Returns an Array of dates or an object with start and end dates for BUILTIN views
     */
    onRangeChange: PropTypes.func,
    /**
     * A callback fired when a date selection is made. 
     * Only fires when selectable is true.
     */
    onSelectSlot: PropTypes.func,
    /**
     * Callback fired when a calendar event is selected 
     * (event: Object, e: SyntheticEvent) => any
     */
    onSelectEvent: PropTypes.func,
    /**
     * Determines the selectable time increments in week and day views
     */
    step: PropTypes.number,
    /**
     * Constrains the minimum time of the Day and Week views
     */
    min: PropTypes.instanceOf(Date),
    /**
     * Constrains the maximum time of the Day and Week views
     */
    max: PropTypes.instanceOf(Date),
};

const AtiCalendarViews = BigCalendar.Views;

export { AtiCalendar, AtiCalendarViews };
