
import React, { useState } from 'react'
function Form() {
    const [input, setInput] = useState()
    const [status, setStatus] = useState(true)
    return (
        <div>
            {
                status ?
                    <h1> {input}</h1> : null
            }

            <label>Name:</label>
            <input onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>

        </div >
    )
}

export default Form
