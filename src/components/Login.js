import React, { useState } from 'react'


function Login() {
    const [user, setUser] = useState("......")
    const [password, setPassword] = useState(".....")
   


    const loginHandle = (e) => {
        e.preventDefault()
        if (user.length < 5 || password.length < 5) {
            alert("Invalid Data")
            console.log(user, password)
        }
        else {
            alert("User Login successfully")
            console.log(user, password)
        }
    }
    return (
        <div>
            <form onSubmit={loginHandle}>
                <input type="text" onChange={(e) => setUser(e.target.value)} />
                <br/>
                {
                    (user.length) < 5 ? <span style={{color:"red"}}>Invalid user</span> : null
                }
                <br />
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <br/>
                {
                    (password.length) < 5 ? <span style={{color:"red"}}>Invalid Password</span> : null
                }
                <br />
                <button type='Submit'>Login</button>

            </form>
        </div>
    )
}

export default Login;
