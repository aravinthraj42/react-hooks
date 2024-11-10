import React,{useReducer} from 'react'
const initialState =0 ;
const reducer = (state, action) => {
    switch(action){
        case 'increment':
         return state + 1
        case 'decrement':
         return state - 1
        case 'reset':
        return initialState
        default:
          return state
    }
}

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchtwo] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>Count - {count}</h1>
        <button type ='button' onClick = {() => dispatch('increment')}>Increment</button>
        <button type ='button' onClick = {() => dispatch('decrement')}>Decrement</button>
        <button type ='button' onClick = {() => dispatch('reset')}>Reset</button>

        <h1>CountTwo - {countTwo}</h1>
        <button type ='button' onClick = {() => dispatchtwo('increment')}>Increment</button>
        <button type ='button' onClick = {() => dispatchtwo('decrement')}>Decrement</button>
        <button type ='button' onClick = {() => dispatchtwo('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree