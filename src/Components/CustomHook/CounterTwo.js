import React from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    const [count, increment, decrement, reset] = useCounter(10, 10)

    // const [count, setcount] = useState(0)

    // const increment = () =>{
    //     setcount(prevState => prevState+1)
    // }
    // const decrement = () =>{
    //     setcount(prevState => prevState-1)
    // }
    // const reset = () =>{
    //     setcount(0)
    // }
  return (
    <div>
       <h1> CounterTwo - {count }</h1>
       <div>
        <button onClick = {increment}>increment</button>
        <button onClick ={decrement}>decrement</button>
        <button onClick ={reset}>reset</button>
        </div>
        </div>
  )
}

export default CounterTwo