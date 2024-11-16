import React from 'react'

function HeaderMenuBreaking({item}) {
  const {text, url} = item;
  const handleClick = () => {
    window.location.href = url;
  };

  return (
     <div className="relative inline-block group">
     <button
       className=""
       onClick={handleClick}
     >
       {text}
     </button>
   </div>
  )
}

export default HeaderMenuBreaking
