import React, { useState, useMemo } from 'react'

// https://kentcdodds.com/blog/usememo-and-usecallback
function Counter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const hanldeIncrementOne = () =>{
        setCountOne(countOne +1)
    }

    const hanldeIncrementTwo = () =>{
        setCountTwo(countTwo +2)
    }
    const isEven = useMemo(() =>{
        let i =0
        while(i < 200000000) i++
        return countOne % 2 === 0
    },[countOne])

  return (
    <div>
        counter
        <div>
        <button onClick = {hanldeIncrementOne}>Incremenet One -{countOne}</button> 
     <span> {isEven ? 'even': 'odd'}</span>
        </div>
    
     <div>
     <button onClick = {hanldeIncrementTwo}>Incremenet two -{countTwo}</button>
     </div>
   
    </div>
  )
}

export default Counter