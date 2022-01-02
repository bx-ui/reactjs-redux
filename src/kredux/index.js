import applyMiddleware from "./applyMiddleware"

export {
  applyMiddleware
}


export function createStore (reducers, enhancer) {

  if (enhancer) {
    // enhancer 加强了dispatch
    // 执行dispatch的时候 就是执行所有的中间件函数和Store。disoatch
    // 如果要加强，肯定需要拿到原先的dispatch (createStore, reducers)
    // 科例化(让你的参数只有一个)
    return enhancer(createStore)(reducers)
  }

  let currentState = null
  let callbacks = []

  // 执行一遍初始化
  currentState = reducers(undefined, { type: '@INIT/REDUX' })

  return {
    getState: () => {
      return currentState
    },
    dispatch: (obj) => {
      currentState = reducers(currentState, obj)

      callbacks.forEach(cb => cb())
    },
    subscribe: (cb) => {
      callbacks.push(cb)

      return () => {
        const index = callbacks.indexOf(cb);
        if (index !== -1) {
          callbacks.splice(index, 1)
        }
      }
    }
  }
}

