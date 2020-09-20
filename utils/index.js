import { applyMiddleware, createStore } from "redux"
import checkPropTypes from "check-prop-types"

import { middlewares, reducer } from "store/configureStore"

export function findByTestAttr(component, attr) {
  return component.find(`[data-test='${attr}']`)
}

export function checkProps(component, expectedProps) {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name,
    null
  )
}

export const testStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(reducer, initialState)
}
