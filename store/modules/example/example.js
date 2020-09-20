// Actions
export const LOAD = "example/LOAD"
export const CREATE = "example/CREATE"
export const UPDATE = "example/UPDATE"
export const REMOVE = "example/REMOVE"

//initial state
const initialState = {
  loading: false,
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      // Perform action
      return state
    case CREATE:
      // Perform action
      return state
    case UPDATE:
      // Perform action
      return state
    case REMOVE:
      // Perform action
      return state
    default:
      return state
  }
}

// Action Creators
export function load() {
  return { type: LOAD }
}

export function create() {
  return { type: CREATE }
}

export function update() {
  return { type: UPDATE }
}

export function remove() {
  return { type: REMOVE }
}

// side effects, only as applicable
export function thunk() {
  return async (dispatch) => dispatch()
}
