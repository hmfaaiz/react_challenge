import React from 'react'
import '../App.css';

import { Link,NavLink } from "react-router-dom";
function Navbar() {

  return (
    <>
      <div>
        <ul  className="nav">
          <li><NavLink className="link" to="/home" >Home</NavLink></li>
          <li><NavLink className="link" to="/about" >About</NavLink></li>
          <li><NavLink className="link" to="/filter" >Filter</NavLink></li>
        </ul>
      </div>
      {/* <div className='App'>
        <h1>Navbar</h1>
      </div> */}



    </>

  );
}

export default Navbar;
