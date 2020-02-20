import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <h1>fsds</h1>
        <div className="switch">
    <label>
      Off
      <input type="checkbox"/>
      <span className="lever"></span>
      On
    </label>
  </div>
      </div>
    )
  }
}

export default App
