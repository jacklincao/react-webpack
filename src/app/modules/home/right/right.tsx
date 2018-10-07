import * as React from 'react'

const Styles = require('./right.styl')

export class Right extends React.Component {

  render() {
    return (
      <div className={ Styles.right }>
        右边12
      </div>
    )
  }
}