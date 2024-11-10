import React, { useState } from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''}) // object{}
  return (
    <div>
<input type = 'text' onChange = {e => setName({...name, firstName: e.target.value})} value = {name.firstName}/>
<input type = 'text' onChange = {e => setName({...name, lastName: e.target.value})} value = {name.lastName}/>

<h1>First Name {name.firstName}</h1>
<h1>Last Name {name.lastName}</h1>
     <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HookCounterThree