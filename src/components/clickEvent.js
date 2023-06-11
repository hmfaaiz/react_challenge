import React from 'react'

function ClickEvent() {
    const click=()=>{
        alert("Button is Clicked")
    }
  return (
    <div>
        <h1>Click Event</h1>
      <button onClick={click}>Click Here</button>
    </div>
  )
}

export default ClickEvent;
