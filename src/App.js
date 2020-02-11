import React, { Component } from 'react'

const getStyle = color => ({
  border: `2px solid ${color}`,
  padding: '10px',
  margin: '15px',
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: false,
      count: 0,
    }
  }

  onTurnOff = evt => {

  }

  onTurnOn = evt => {

  }

  onIncrement = evt => {

  }

  render() {
    return (
      <div className="app" style={getStyle('black')}>
        <h4>App component</h4>
        {/* Make the OFF/ON label be state-driven */}
        <div>Subcomponents are OFF</div>

        <div className="buttons">
          {/* Make the buttons work */}
          <button>turn ON</button>
          <button>turn OFF</button>
        </div>

        {/* Counter should only exist if this.state.on === true */}
        {/* Counter needs data and callbacks to function */}
        <Counter />
      </div>
    )
  }
}

class Counter extends Component {
  // Make this component work
  render() {
    return (
      <div className="counter" style={getStyle('green')}>
        <h4>Counter Subcomponent</h4>
        <div>The count is 0</div>
        <button>Increment</button>
      </div>
    )
  }
}

export default App
