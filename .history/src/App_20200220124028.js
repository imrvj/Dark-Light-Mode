import React, { useState } from 'react';

import './App.css';

function App() {
  const [Color, setColor] = useState("black")
  const [ischecked, setIschecked] = useState(false)
  return (
    <div className="App">
      <div className="Box" style={{backgroundColor:Color}}></div>
      <div className="Buttonbox">
      <div class="switch">
    <label>
      Dark
      <input type="checkbox" onChange={()=>setColor("white")} checked={true}/>
      <span className="lever"></span>
      Light
    </label>
  </div>
      </div>
     
    </div>
  );
}

export default App;
