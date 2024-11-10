import React ,{useState} from 'react'
import HookMouse from './HookMouse'

export default function MouseContainner() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick ={()=> {setDisplay(!display)}}>ToggleDisplay</button>
        {display  && <HookMouse />}
    </div>
  )
}
