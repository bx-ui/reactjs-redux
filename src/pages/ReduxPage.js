import React from 'react'
import store from '../store1/'

export default class ReduxPage extends React.Component {
  add = () => {
    // store.dispatch({ type: 'ADD', payload: 100 })
    store.dispatch(() => {
      setTimeout(() => {
        store.dispatch({ type: 'ADD', payload: 100 })
      }, 2000);
    })
  }
  minus = () => {
    store.dispatch({ type: 'MINUS', payload: 10 })
  }

  componentDidMount () {
    // 订阅
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount () {
    // this.unsubscribe()
  }

  render () {
    return (
      <div>
        {store.getState()}
        <div>
          <button onClick={this.add}>ADD</button>
          <button onClick={this.minus}>MINUS</button>
        </div>
      </div>
    )
  }
}