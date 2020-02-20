import React, { useState } from 'react';

import './App.css';

function App() {
  const [Color, setColor] = useState("black")
  return (
    <div className="App">
      <div className="Box" style={{backgroundColor:Color}}></div>
      <div className="Buttonbox">
      <div class="switch">
    <label>
      Dark
      <input type="checkbox" onChange={(e)=>setColor("white")} checked={color}/>
      <span className="lever"></span>
      Light
    </label>
  </div>
      </div>
     
    </div>
  );
}

export default App;
