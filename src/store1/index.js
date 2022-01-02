// import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import { createStore, applyMiddleware } from '../kredux/'


function logger ({ getState, dispatch }) {
  return next => action => {
    console.log('-----------------------------');
    const prevState = getState()
    console.log('prev state', prevState);

    const returnVal = next(action)

    const nextState = getState()
    console.log('next state', nextState);

    console.log('-----------------------------');

    return returnVal
  }
}

const reducers = (state = 0, { type, payload }) => {
  switch (type) {
    case 'ADD':
      state += payload
      return state
    case 'MINUS':
      state -= payload
      return state
    default:
      return state
  }
}

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store