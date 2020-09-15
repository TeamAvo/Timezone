import React from 'react'

import moment from 'moment-timezone'
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from './reducers/actions'

class Time extends React.Component {
    render() {
        const handleDateChange = (date) => {
            this.props.setDate(date)
        };

        const t = moment(this.props.date)
        return (
            <div className='timebox'>
                <h1>{t.format()}</h1>
                <ThemeProvider theme={createMuiTheme({ palette: { type: 'dark' } })}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                className='white'
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={this.props.date}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                className='white'
                                margin="normal"
                                id="time-picker"
                                label="Time picker"
                                value={this.props.date}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </ThemeProvider>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    date: state.date
})
export default compose(connect(mapStateToProps, actions))(Time)
