import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import moment from 'moment'

import 'react-day-picker/lib/style.css';

class DateCalendar extends Component {
    state = {
        from: null,
        to: null
    }

    handleReset = ev => {
        this.setState({
            from: null,
            to: null
        })
    }

    handleChange = day => {
        const state = DateUtils.addDayToRange(day, this.state);
        this.setState(state)
    }

    render() {
        const { from, to } = this.state
        return (
            <div>
                <DayPicker
                    onDayClick={this.handleChange}
                    selectedDays={[from, { from, to }]}
                    numberOfMonths={2}
                    fixedWeeks
                />
                {this.getFormattedMessage(from, to, this.props.dateFormat)}
            </div>
        )
    }

    getFormattedMessage(from, to, format) {
        if (!from) {
            return <p>Please select the <strong>first day</strong>.</p>;
        }

        if (!to) {
            return <p>Please select the <strong>last day</strong>.</p>
        }

        return (
            <div>
                <br />
                Selected dates from {moment(from).format(format)} to {moment(to).format(format)}
                <br />
                <button onClick={this.handleReset}>Clear</button>
            </div>
        )
    }
}

DateCalendar.defaultProps = {
    dateFormat: 'S'
}

export default DateCalendar 