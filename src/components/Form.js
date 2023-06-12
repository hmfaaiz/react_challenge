
import React, { useState } from 'react'
function Form() {
    const [input,setInput]=useState()
  return (
    <div>
        <h1>{input}</h1>
      <label>Name:</label>
      <input onChange={(e)=>setInput(e.target.value)}></input>
    </div>
  )
}

export default Form
