import React from 'react'
import {Link,useLocation,useNavigate} from "react-router-dom";
function Home() {
  const navigate = useNavigate()
    const setlogout = () => {
        localStorage.setItem("signin","no")
        navigate("/signin")
    }
  
  return (
    <div>
      <h1>Home</h1>
      <p>This is home page</p>
      <Link to="/about" state={{name:"Peter"}}>Go to About</Link>
      <button onClick={setlogout}>Log out</button>
    </div>
  )
}

export default Home
