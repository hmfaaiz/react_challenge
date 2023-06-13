import React from 'react'
import '../App.css';

import {Link } from "react-router-dom";
function Navbar() {
  
  return (
  
      <div className="App">
        <h1>Navbar</h1>
  
      
        <Link to="/home" >Home</Link>
        <br />
        <Link to="/about" >About</Link>

      </div>
   
  );
}

export default Navbar;
