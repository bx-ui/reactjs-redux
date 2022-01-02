export default function applyMiddleware (...middlewares) {
  return createStore => reducers => {
    const store = createStore(reducers)
    let dispatch = store.dispatch

    // TODO: 加强dispatch
    // 执行dispatch的时候，就是执行所有的中间件函数和store.dispatch

    // 数据仓库的控制权
    const midApi = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    const chain = middlewares.map(middleware => middleware(midApi))

    dispatch = compose(...chain)(store.dispatch)

    return { ...store, dispatch }
  }
}

function compose (...funs) {
  if (funs.length === 0) {
    return (arg) => arg
  }

  if (funs.length === 1) {
    return funs[0]
  }

  return funs.reduce((a, b) => (...args) => a(b(...args)))
}