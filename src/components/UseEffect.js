import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.warn('UseEffect')
    })

    useEffect(() => {
        console.warn('UseEffect with condition')
    },[])

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}

export default UseEffect
