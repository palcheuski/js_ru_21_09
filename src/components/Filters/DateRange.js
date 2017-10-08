import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    static propTypes = {
        range : PropTypes.shape({
            from: PropTypes.object,
            to: PropTypes.object
        }).isRequired,
        onDayClick : PropTypes.func.isRequired
    };
   
    handleDayClick = (day) => {
        this.props.onDayClick(DateUtils.addDayToRange(day, this.props.range));
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        )
    }

}

export default DateRange