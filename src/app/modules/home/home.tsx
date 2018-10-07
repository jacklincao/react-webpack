import * as React from 'react'
import { Left } from './left'
import { Right } from './right'

const Styles = require('./home.styl')

export class Home extends React.Component {

  render() {
    return (
      <div className={ Styles.home }>
        <Left />
        <Right />
      </div>
    )
  }
}