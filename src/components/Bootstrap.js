import React from 'react'
import { Button, Alert } from "react-bootstrap"

function Bootstrap() {

    const bootstrapHandle = () => {

        alert("https://react-bootstrap.github.io/")
    }
    return (
        <div>
            < Alert >
                This is a alert—check it out!
            </Alert >
            <Button onClick={bootstrapHandle}>See Bootstrap</Button>
        </div>
    )
}

export default Bootstrap
