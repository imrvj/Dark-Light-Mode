import React, { Component, useState } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dark:false
         
    }
  }
  handlethis=()=>
  {
    this.setState(
      {
        dark:!dark
      }
    )
  }

  render() {
    
    return (
      <div className="App ">
              <div className="nav">
              <div className="switch">
          <label>
            Dark
            <input type="checkbox" onChange={handlethis}/>
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
