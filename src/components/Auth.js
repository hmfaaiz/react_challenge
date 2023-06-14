import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Auth(props) {
    const navigate=useNavigate()
    useEffect(()=>{
        const signin=localStorage.getItem('signin')
        console.log(signin)
        if(signin==="no" || signin=== null){
            navigate("/signin")
        }
    })
  return (
    <div>
      <props.Component/>
    </div>
  )
}

export default Auth
