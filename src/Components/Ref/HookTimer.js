import React, {useState, useEffect, useRef} from 'react'

export default function HookTimer() {
    const [count, setCounter] = useState(0)
    const inputRef = useRef(null)

    useEffect(() => {
     inputRef.current = setInterval(() => {
          (setCounter(prevState => prevState + 1))
        },1000)
    //   setCounter(prevState => prevState.count+1)
    
      return () => {
        clearInterval(inputRef.current)
      }
    }, [])
    
  return (
    <div>HookTimer - {count}
    <button onClick = {()=> clearInterval(inputRef.current)}>Clear Timer hook</button>
    </div>
  )
}
