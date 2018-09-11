import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from './app'

const render = (Component) => {
  ReactDOM.render(
    <Component />,
    document.getElementById('root')
  )
}

document.addEventListener('DOMContentLoaded', () => {
  render(App)
})