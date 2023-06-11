import React, { useState } from 'react'

function ClickEvent() {
    const [mycourse, setMycourse] = useState("My React Challenge");
    //let course = "React Challenge"
    const click = () => {
        //course="React"
        // alert(course)
        setMycourse("React")

        alert("Your sate is changing")
    }
    return (
        <div>
            <h1>{mycourse}: Click Event</h1>
            <button onClick={click}>Click Here</button>
            <button onClick={() => { alert("Hello") }}>Click Me</button>
        </div>
    )
}


export default ClickEvent;
