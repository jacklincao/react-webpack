import * as React from 'react'

interface AppProps {
  userId: string
}

export class App extends React.Component<AppProps> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>Hello World!</div>
    )
  }
}