import React from 'react'
import {Link,useLocation} from "react-router-dom";
function Home() {
  
  return (
    <div>
      <h1>Home</h1>
      <p>This is home page</p>
      <Link to="/about" state={{name:"Peter"}}>Go to About</Link>
    </div>
  )
}

export default Home
