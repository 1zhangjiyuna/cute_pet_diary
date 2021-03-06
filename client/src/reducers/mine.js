import { LOGIN, GETUSER } from '../constants/mine'

const initialState = {
  user: null
}

export default function Reducer (state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case LOGIN:
      return {
        ...state,
        user: payload
      }
    case GETUSER:
      return {
        ...state,
        user: payload
      }
    default:
      return state
  }
}