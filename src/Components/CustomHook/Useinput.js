import React from 'react'
import useInput from './useInputr'

function Useinput() {
    // const [firstName, setfirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    const [firstName, resetfirstName, bindfirstName] = useInput('')
    const [lastName, resetlastName,bindlastName] = useInput('')

    const handleClick = e =>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetfirstName('')
        resetlastName('')
    }
  return (
    <div>
        <form onSubmit={handleClick}>
        <label>First Name:</label>
            <input type = 'text' 
           {...bindfirstName} 
           />
 
        <label>Last  Name:</label>
            <input type = 'text' 
            {...bindlastName}
            />
    <button>submit</button>
    </form>
    </div>
  )
}

export default Useinput