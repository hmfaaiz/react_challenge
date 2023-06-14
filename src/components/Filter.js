import React from 'react'
import { useSearchParams } from "react-router-dom";
function Filter() {
    const [searchParams,setSearchParams]=useSearchParams()
    const city=searchParams.get('city')
    const name=searchParams.get('name')
  return (
    <div>
      <h1>Name is : {name}</h1>
      <h1>City is : {city}</h1>
      <input onChange={(e)=>{setSearchParams({city:e.target.value})}} type="text" placeholder="city"/>
      <input onChange={(e)=>{setSearchParams({name:e.target.value})}} type="text" placeholder="name"/>
   
    </div>
  )
}

export default Filter
