import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const getmode=()=>
  {
    return JSON.parse(localStorage.getItem("Mode")) || false
  }
  
  const [dark, setDark] = useState(getmode)
  useEffect(() => {
    localStorage.setItem("Mode",JSON.stringify(dark))
  }, []);

  
  
  return (
   
    <div className={dark?"dark-mode app" :"app"}>
              <div className="nav">
              <div className="switch">
          <label>
            Light
            <input type="checkbox" onChange={(e)=>setDark(!dark) } checked={dark}/>
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
