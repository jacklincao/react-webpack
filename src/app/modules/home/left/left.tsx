import * as React from 'react'

const Styles = require('./left.styl')

interface State {
  age: number
}

export class Left extends React.Component<{}, State> {

  constructor(props) {
    super(props)
    this.state = {
      age: 1
    }
  }

  render() {
    return (
      <div className={ Styles.left }>
        左边{ this.state.age }
      </div>
    )
  }
}