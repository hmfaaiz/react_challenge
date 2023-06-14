import React from 'react'
import {useParams,Link} from "react-router-dom"
function User() {
    const {name}=useParams()
  return (
    <div>
      <h1>User name is {name}</h1>
      <br/>
      <Link to="/home" >back</Link>
    </div>
  )
}

export default User
