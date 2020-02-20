import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
              <div className="nav">
              <div className="switch">
          <label>
            Dark
            <input type="checkbox"/>
            <span className="lever"></span>
            Light
          </label>
        </div>
        </div>

        <div className="content">
          <h1>Light Mode</h1>
        </div>
      </div>
    )
  }
}

export default App
