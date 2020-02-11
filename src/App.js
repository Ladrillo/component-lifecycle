import React, { Component } from 'react'

class App extends Component {
  // Create a slice of state called "on"
  // This slice can be either true or false
  // The initial value should be false

  render() {
    return (
      <div className="app">
        The subcomponent is OFF
      </div>
    )
  }
}

export default App
