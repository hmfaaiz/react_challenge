import React, { useState } from 'react'
import './App.css';
import Prop from "./components/Prop"
function App() {
  const [myname, setMyname] = useState("Faaiz");

  const click = () => {

    setMyname("")
  }
  return (
  
      <div className="App">
        <h1>App</h1>
  

     
        
  

        <Prop function={click} myname={myname} age={10} city={"Karachi"} blue={"Blue"} red={"red"}/>
      <input style={{margin:"10px"}} onChange={(e)=>setMyname(e.target.value)} value={myname}/>


      </div>
   
  );
}

export default App;
