import React from 'react'
import NavigationItem from './NavigationBox/NavigationItem'

function NavigationBox() {
  const veryImportantSide = ['Economia', 'Politica', 'Arte', 'Calcio', 'Proteste', 'Roma', 'Clima']
  return (
     <div className="w-1/6 h-full p-4 shaddow-sm border-l-2 border-black">
     {veryImportantSide.map((item) => <NavigationItem item={item} />)}
   </div>
  )
}

export default NavigationBox
