import React from 'react'
import { ChannelContext, UseContext } from '../../App'

function ComponentC() {
  return (
    <div>
        <UseContext.Consumer>
{user => {
        return(
            <ChannelContext.Consumer>
                {channel =>{
                       return(
                   
                        <div>User Context Value {user}, {channel}</div>
                       )
                      
                }}
            </ChannelContext.Consumer>             
  )
                }}
        </UseContext.Consumer>
    </div>
  )
}

export default ComponentC