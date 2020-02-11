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
          <button onClick={evt => this.onTurn(true)}>turn ON</button>
          <button onClick={evt => this.onTurn(false)}>turn OFF</button>
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
  // Flesh out a bunch of "lifecycles"
  constructor(props) {
    super(props)
    console.log(`💥 component being constructed`)
  }

  componentDidMount() {
    // attach code here
    // we wish to run after React is done with DOM surgery
    console.log(`💥 component was mounted after the FIRST render`)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`💥 component was updated after the SUBSEQUENT renders`)
    console.log(`
      the count used to be ${prevProps.count}
      but the count is now ${this.props.count}
    `);
    if (this.props.count === 5) {
      this.props.onIncrement()
    }
  }

  // componentWillUnmount() {
  //   console.log(`💥 component about to be unmounted from DOM`)
  // }

  render() {
    const { count, onIncrement } = this.props
    console.log(`💥 component being rendered`)
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
