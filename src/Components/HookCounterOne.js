import React, { useState, useEffect } from 'react'

// Use Effect 
function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(()=>{
      document.title = `you Click ${count} times`
      console.log('updating Effect')
  },[count])
  return (
    <div>
        <input type = 'text' value = {name} onChange={e => setName(e.target.value)}/>
        <button onClick ={() => setCount(count+1)}>Counter {count}</button>
    </div>
  )
}

export default HookCounterOne