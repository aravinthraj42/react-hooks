import React, { useState, useEffect } from 'react'

export default function HookMouse() {
   const [x,setX] = useState(0)
   const [y,setY] = useState(0)

   const logMousePoision = e => {
       console.log('I m Mouse Movement');
   setX(e.clientX)
   setY(e.clientY)
   }
   useEffect(()=>{
       console.log('Updating use Effect');
       window.addEventListener('mousemove', logMousePoision)
       // Component Clean up or Unmount 
       // use Effect can Return Function
       return () => {
         console.log('Clean up')
         window.removeEventListener('mousemove', logMousePoision)
       }
   },[])
  return (
    <div>
        Hooks X- {x} Y- {y}
    </div>
  )
}
