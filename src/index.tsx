import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import Context from './contexts/Context'

ReactDOM.render(
  <Suspense fallback={null}>
    <Context.Provider value='initialValue'>
      <App />
      </Context.Provider>
  </Suspense>,
  document.getElementById('root')
)