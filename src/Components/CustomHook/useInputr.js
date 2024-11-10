import {useState} from 'react'

function useInput(initialvales) {
    const [value, setValue] = useState(initialvales)

    const reset = () =>{
        setValue(initialvales)
    }

    const bind = {
        value, 
        onChange: e =>{
            setValue(e.target.value)
        } 
    }
    return [value,reset,bind]

}

export default useInput