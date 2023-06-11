import React from 'react'

function ClickEvent() {
    let course = "React Challenge"
    const click = () => {
        course="React"
        alert(course)
    }
    return (
        <div>
            <h1>{course}: Click Event</h1>
            <button onClick={click}>Click Here</button>
            <button onClick={() => { alert("Hello") }}>Click Me</button>
        </div>
    )
}

export default ClickEvent;
