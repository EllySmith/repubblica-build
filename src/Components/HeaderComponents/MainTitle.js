import React from 'react'
import Logo from './rep-logo.png'

function MainTitle() {
  return (
    <div className='flex items-center justify-center w-full my-8'>
      <img src={Logo} alt='Logo del giornale, nere lettere su bianco' width='40%'></img>
    </div>
  )
}

export default MainTitle
