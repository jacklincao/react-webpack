import * as React from 'react'
import { Home } from './modules/home'

interface State {
  asdfasd: number
}

export class App extends React.Component<{}, State> {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
