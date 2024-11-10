import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function DataFetchingOne() {
const [loading, setLoading] = useState(true)
  const [post, setPost] =  useState({})
  const [error, setError] =  useState('')

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res =>{
        setLoading(false)
        setPost(res.data)
        setError('')
    }
    )
    .catch(error =>{
        setError('Some Thing went Wrong')
        setLoading(false)
        setPost('')
    })
},[])
  return (

    <div>
        {loading ? 'Loading' : post.title }
        {error ? error : null}
    
    </div>

  )
}
