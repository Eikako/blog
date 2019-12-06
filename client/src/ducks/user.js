// Action types
const RECEIVE_SESSION = "RECEIVE_SESSION"

// Action creators
export const receiveSession = user => ({
  type: RECEIVE_SESSION,
  user
})

// Reducers initial state
const initialState = {
  session: {}
}

// User reducer
export const user = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SESSION:
      return {
        ...state,
        session: action.user
      }
    default:
      return state
  }
}