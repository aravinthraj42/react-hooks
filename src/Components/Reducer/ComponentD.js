import React,{useContext} from 'react'
import { UserContext } from '../../App'


function ComponentD() {
    const userCount = useContext(UserContext)
  return (
    <div>
        <button type ='button' onClick = {() => userCount.countDispatch('increment')}>Increment</button>
        <button type ='button' onClick = {() => userCount.countDispatch('decrement')}>Decrement</button>
        <button type ='button' onClick = {() => userCount.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentD