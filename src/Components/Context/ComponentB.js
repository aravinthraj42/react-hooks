import React, { useContext } from 'react'
import { ChannelContext, UseContext } from '../../App'
import ComponentC from './ComponentC'


function ComponentB() {

const user = useContext(UseContext)
const channel = useContext(ChannelContext)
  return (
    <div>
       {user} - {channel}
       <ComponentC />
    </div>
  )
}

export default ComponentB