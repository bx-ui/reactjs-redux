import * as BundleTypes from './actionTypes'

const defaultState = {
  counter: 0,
  dogSubList: []
}

export default (state = defaultState, { type, payload }) => {
  if (type === BundleTypes.ADD_COUNTER) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.counter += payload
    return newState
  } else if (type === BundleTypes.ADD_DOG_SUB) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.dogSubList = payload
    return newState
  } else {
    return state
  }
}
