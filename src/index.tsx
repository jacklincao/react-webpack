import './common'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'
import { AppContainer } from 'react-hot-loader'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

document.addEventListener('DOMContentLoaded', () => {
  render(App)
})

if(module.hot) {
  module.hot.accept('./', () => {
    const newApp = require('./app').App
    render(newApp)
  })
}