import React, { useState } from 'react';

import './App.css';

function App() {
  const [dark, setDark] = useState(false)
  
  return (
   
    <div className="App ">
              <div className="nav">
              <div className="switch">
          <label>
            Light
            <input type="checkbox" onChange={()=>setDark(!dark)}/>
            <span className="lever"></span>
            Dark
          </label>
        </div>
        </div>

        <div className="content">
<h2>{dark?"dark mode is on" : "Light mode is on"}</h2>
        </div>
      </div>
  );
}

export default App;
