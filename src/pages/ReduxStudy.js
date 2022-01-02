import React from 'react'
import store from '../store'
import * as BundleActions from '../store/actionCreator'

export default class ReduxStudy extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount () {
    store.subscribe(() => {
      this.onStoreChange()
    })
  }

  onStoreChange = () => {
    this.setState(store.getState())
  }

  add = () => {
    const action = BundleActions.addCounterAction(1)
    store.dispatch(action)
  }

  addDog = () => {
    const action = BundleActions.addDogThunkAction()
    store.dispatch(action)
  }

  render () {
    return (
      <div>
        {this.state.counter}
        <button onClick={this.add}>ADD</button>
        <button onClick={this.addDog}>ADD_DOG</button>
      </div>
    )
  }
}