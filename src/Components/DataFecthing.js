import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFecthing() {
    const [datas,setData] = useState({})
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1)

    const handleClick = () => {
         setIdFromButton(id)
    }

    useEffect(()=>{
        axios
        .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setData(res.data)
        }).catch(err =>{
            console.log('Error', err)
        })
    },[idFromButton])
  return (
    <div>
        <input type ='text' value = {id} onChange = {e => setId(e.target.value)}/>
        <button type='button' onClick ={handleClick} >FetchPost</button>
        <div>{datas.title}</div>
        {/* <li>{
            datas.map(data =>
                <li key = {data.id}>{data.title}</li>)
            }

        </li> */}
    </div>
  )
}

export default DataFecthing