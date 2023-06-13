import React, { useEffect, useState,useMemo } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0)
    const [counter, setCounter] = useState(0)
    // useEffect(() => {
    //     console.warn('UseEffect')
    // },[count])

    // useEffect(() => {
    //     console.warn('UseEffect with condition')
    // },[counter])

    const memo=useMemo( function usememo(){
        
        console.log(counter+2)
    },[counter])

    return (
        <div>
            {memo}
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Count</button>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(counter+2)}>Counter</button>
        </div>
    )
}

export default UseMemo
