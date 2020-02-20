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
      <div className="App ">
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
          <h2>Light Mode</h2>
        </div>
      </div>
    )
  }
}

export default App
