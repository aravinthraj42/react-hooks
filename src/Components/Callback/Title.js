import React from 'react'

function Title() {
    console.log('Rendering Title')
  return (
    <div>use Call back Hook</div>
  )
}

export default React.memo(Title)