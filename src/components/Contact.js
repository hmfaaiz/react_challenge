import React from 'react'
import {NavLink, Outlet } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h1>Welcome to contact page</h1>
      <ul >
          <li><NavLink className="link" to="viavideo" >Via video</NavLink></li>
          <li><NavLink className="link" to="viacall" >Via Call </NavLink></li>
          <Outlet/>
         
          
        </ul>
    </div>
  )
}

export default Contact
