import React from 'react'
import { useDispatch } from 'react-redux';
import { fetchScrapedData, toggleModal } from '../../store/modalSlice';

function HeaderMenuBreaking({item}) {
  const dispatch = useDispatch();
  const {text, url} = item;
  const handleClick = () => {
    window.location.href = url;
  };

  return (
     <div className="z-0 transform hover:scale-110 transition duration-300 inline-block group">
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
