import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function Signin() {
    const navigate = useNavigate()
    const setsignin = () => {
        localStorage.setItem("signin", "yes")
        navigate("/home")
    }

    return (
        <div>
            <input type="text" placeholder='name' />
            <br />
            <input type="password" placeholder='password' />
            <br />
            <button onClick={setsignin}>Sign in</button>

        </div>
    )
}

export default Signin
