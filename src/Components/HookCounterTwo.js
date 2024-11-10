import React, { useState } from 'react'

function HookCounterTwo() {
    const intialValue = 0
  const [count, setCount] = useState(intialValue)
 const incrementFive = () =>{
for(let i=0; i<5; i++){
    // console.log('insideLoop'); Will Enter Five Times and Update Each Time, 
    // Which is Invisble
    setCount(prevState => prevState+1)
}
  }
  return (
    <div>
        Count:{count}
        <button onClick = {()=>setCount(intialValue)}>Reset </button>
        <button onClick = {()=>setCount(prevState => prevState+1)}> Increment  </button>
        <button onClick = {()=>setCount(prevState => prevState-1)}> Decrement </button>
        <button onClick = {incrementFive}> incrementFive </button>
    </div>
  )
}

export default HookCounterTwo