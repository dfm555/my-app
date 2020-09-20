import { useMemo } from "react"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { createLogger } from "redux-logger"
import ReduxThunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
/* Plop Generated Imports */
import example from "./modules/example/example"

const loggerMiddleware = createLogger() // initialize logger

export const middlewares = [ReduxThunk, loggerMiddleware]

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(...middlewares)
)(createStore) // apply logger to redux

export const reducer = combineReducers({
  /* Plop Generated Reducers */
  example,
})

let store

function initStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState)
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

const configureStore = (initialState) =>
  useMemo(() => initializeStore(initialState), [initialState])
export default configureStore
