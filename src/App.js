import React, { useState } from 'react'
import './App.css';
import Prop from "./components/Prop"
function App() {
  const [myname, setMyname] = useState("ALi");
    
    const click = () => {
        
        setMyname("Faaiz")
    }
  return (
    <div className="App">
      <h1>App</h1>
      <Prop function={click} myname={myname} age={10} city={"Karachi"} blue={"Blue"} red={"red"}/>

    </div>
  );
}

export default App;
