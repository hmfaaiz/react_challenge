import React from 'react'

function Prop(props) {
  return (
    <div>
      <h1 style={{backgroundColor:props.blue,margin:"20px"}}>My name is {props.myname}</h1>
      <p>My age is {props.age}</p>
      <p style={{backgroundColor:props.red}}>My city is {props.city}</p>
      <button onClick={props.function}>Remove Name</button>
    </div>
  )
}

export default Prop
