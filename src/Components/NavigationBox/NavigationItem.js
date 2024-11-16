import React from 'react'

function NavigationItem({item}) {
  return (
     <div className="border-b-2 py-2">
     <div className="font-bold">{item}</div>
     <div className="text-gray-600">prima notizia molto interessante...</div>
   </div>
  )
}

export default NavigationItem
