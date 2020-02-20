import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [dark, setDark] = useState(getmode)
  useEffect(() => {
    localStorage.setItem("Mode",JSON.stringify(dark))
  }, []);

  const getmode=()=>
  {
    return JSON.parse(localStorage.getItem("Mode")) || false
  }
  
  return (
   
    <div className={dark?"dark-mode app" :"app"}>
              <div className="nav">
              <div className="switch">
          <label>
            Light
            <input type="checkbox" onChange={(e)=>setDark(!dark) }/>
            <span className="lever"></span>
            Dark
          </label>
        </div>
        </div>

        <div className="content">
<h2>{dark?"Dark mode is on" : "Light mode is on"}</h2>
        </div>
      </div>
  );
}

export default App;
