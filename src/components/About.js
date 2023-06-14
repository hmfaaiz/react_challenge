import React from 'react'
import {Link} from "react-router-dom";
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is about page</p>
      <Link to="/home" >Go to Home</Link>
      <br/>
        <Link to="/user/David" >David</Link>
        <br/>
        <Link to="/user/Danish" >Danish</Link>
    </div>
  )
}

export default About
