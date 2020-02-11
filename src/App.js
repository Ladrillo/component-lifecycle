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

  onTurn = on => { // "on" arg is either true or false
    this.setState({ on })
  }

  onIncrement = evt => {
    this.setState(oldState => {
      return {
        count: oldState.count + 1,
      }
    })
  }

  render() {
    const { on } = this.state

    return (
      <div className="app" style={getStyle('black')}>
        <h4>App Component</h4>
        {/* Make the OFF/ON label be state-driven */}
        <div>Subcomponents are {on ? "ON" : "OFF"}</div>

        <div className="buttons">
          {/* Make the buttons work */}
          <button onClick={this.onTurnOn}>turn ON</button>
          <button onClick={this.onTurnOff}>turn OFF</button>
        </div>

        {/* Counter should only exist if this.state.on === true */}
        {/* Counter needs data and callbacks to function */}
        {/* {this.state.on ? <Counter /> : null} */}
        {this.state.on && (
          <Counter
            count={this.state.count}
            onIncrement={this.onIncrement}
          />
        )}
      </div>
    )
  }
}

class Counter extends Component {
  // Make this component work
  render() {
    const { count, onIncrement } = this.props

    return (
      <div className="counter" style={getStyle('green')}>
        <h4>Counter Subcomponent</h4>
        <div>The count is {count}</div>
        <button onClick={onIncrement}>Increment</button>
      </div>
    )
  }
}

export default App
