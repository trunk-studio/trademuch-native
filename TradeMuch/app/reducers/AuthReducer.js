import {
  RECEIVED_USER_INFO
} from '../actions/AuthActions'

export function auth( state = {}, action) {
  switch (action.type) {
    case RECEIVED_USER_INFO:
      return {
        ...state,
        userInfo: action.data
      }
    default:
      return state
  }
}
