function f1 (payload) {
  console.log('f1', payload);
  return payload
}

function f2 (payload) {
  console.log('f2', payload);
  return payload
}

function f3 (payload) {
  console.log('f3', payload);
  return payload
}

function compose (...funs) {
  if (funs.length === 0) {
    return (arg) => arg
  }

  return funs.reduce((a, b) => (...args) => b(a(...args)))
}

compose(f1, f2, f3)('omg')