import React, { useEffect } from 'react'

function Fetchapi() {
    useEffect(() => {
        fetch("https://randomuser.me/api/").then((result) => {
            result.json().then((res) => {
                console.log(res)
            })
        })

    }, [])

    return (
        <div>

        </div>
    )
}

export default Fetchapi
