import  {useState} from 'react'

export default function useCounter(initialState = 0, values) {
    const [count, setcount] = useState(initialState)

    const increment = () =>{
        setcount(prevState => prevState+values)
    }
    const decrement = () =>{
        setcount(prevState => prevState-values)
    }
    const reset = () =>{
        setcount(initialState)
    }
    return [count, increment, decrement, reset]
}
