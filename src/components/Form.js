
import React, { useState } from 'react'
function Form() {
    const [input, setInput] = useState()
    const [status, setStatus] = useState(true)
    const [city, setCity] = useState()
    const [check, setCheck] = useState(false)
    const formHandler = (e) => {
        e.preventDefault()

        console.log(input, city, check)

    }

    return (
        <div>
            {
                status ?
                    <h1> {input}</h1> : null
            }
            <form onSubmit={formHandler}>
                <label>Name:</label>
                <input type="text" onChange={(e) => setInput(e.target.value)}></input>
                <br />
                <select onClick={(e) => setCity(e.target.value)}>
                    <option value="Karachi" >Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                </select>
                <br />
                <br />
                <input type="checkbox" onClick={() => setCheck(true)} /> Agree? with terms and condition
                <div>
                    <button onClick={() => setStatus(false)}>Hide</button>
                    <button onClick={() => setStatus(true)}>Show</button>
                    <button onClick={() => setStatus(!status)}>Toggle</button>


                </div>
                <button type="Submit">Submit</button>
            </form>

        </div >
    )
}

export default Form
