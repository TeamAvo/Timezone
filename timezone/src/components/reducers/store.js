import {
  SET_DATE
} from './types.js'
import moment from 'moment-timezone'

const initialState = {
  date: new Date(moment().format())
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        date: action.payload
      }
    default:
      return state
  }
}
