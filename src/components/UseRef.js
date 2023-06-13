import React,{useRef} from 'react'
import ForwardRef from "./ForwardRef"
function UseRef() {
    const inputTag=useRef(null)
    const change=()=>{
        inputTag.current.style.color="red"
        inputTag.current.value="Yes"
        inputTag.current.focus()
        // inputTag.current.style.display="none"
    }
  return (
    <div>
      {/* <input type="text" ref={inputTag} /> */}
      <ForwardRef ref={inputTag}/>
      <button onClick={change}>Change Color</button>
    </div>
  )
}

export default UseRef
