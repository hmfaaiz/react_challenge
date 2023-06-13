import React from 'react'
import {Link} from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is home page</p>
      <Link to="/about" >Go to About</Link>
    </div>
  )
}

export default Home
