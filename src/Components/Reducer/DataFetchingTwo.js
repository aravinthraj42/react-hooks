import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState ={
    loading: true,
    post: {},
    error: ''
}
const reducer = (state, action)  => {
switch(action.type){
    case 'DATA_FETCH_SUCCESS':
    return {
        loading: false,
        post: action.payload,
        error: ''
    };
    case 'DATA_ERROR':
    return {
        loading: false,
        post: {},
        error: 'Something went Wrong'
    }
    default: return state
}
}


 function DataFetchingTwo() {

 const [state,dispatch]  = useReducer(reducer, initialState)

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>{
     dispatch({type: 'DATA_FETCH_SUCCESS', payload: res.data})
    }
    )
    .catch(error =>{
     dispatch({type: 'DATA_ERROR'})
    })
},[])
  return (
    <div>
       {state.loading ? 'Loading' : state.post.title }
        {state.error ? state.error : null}
    </div>
  )
}
export default DataFetchingTwo