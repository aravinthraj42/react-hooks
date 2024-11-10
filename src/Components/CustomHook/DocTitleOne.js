import React, { useState } from 'react'
import useDocTitlehook from './useDocTitlehook'

function DocTitleOne() {
    const [count, setCount] = useState(0)

    useDocTitlehook(count)
  return (
    <div>
    <button onClick = {()=>{setCount(count + 1)}}> 
        Count Doc One -{count}
    </button>
    
    </div>
  )
}

export default DocTitleOne