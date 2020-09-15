import {
  SET_DATE
} from './types.js'
import moment from 'moment-timezone'

export const setDate = (date) => {
  return (dispatch) => {
    console.log(date)
    dispatch({
      type: SET_DATE,
      payload: moment(date)
    })
  }
}