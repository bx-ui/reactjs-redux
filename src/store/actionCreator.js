import * as BundleTypes from './actionTypes'
import axios from 'axios'

export const addCounterAction = (payload) => ({
  type: BundleTypes.ADD_COUNTER,
  payload
})

const addDogAction = (payload) => ({
  type: BundleTypes.ADD_DOG_SUB,
  payload
})

export const addDogThunkAction = (payload) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get('https://dog.ceo/api/breed/hound/list')
    dispatch(addDogAction(data.message))
  }
}