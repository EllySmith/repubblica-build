import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal, fetchScrapedData } from '../../store/modalSlice'

function FirstLine({ item }) {
  const dispatch = useDispatch();
  const { title, body, imageUrl, link } = item;
  const handleModal = async (url) => {
    dispatch(fetchScrapedData(url));
    dispatch(toggleModal());
    };

  return (
    <div
  className="w-full sm:w-full md:w-full p-4 bg-white shadow-lg border-t-2 border-black flex flex-col sm:flex-row mb-4 transform transition-all duration-300 ease-in-out hover:z-50 hover:bg-gray-200 hover:border-black"
  onClick={() => handleModal(link)}
>
  <div className="flex-1 w-full sm:w-2/3 flex flex-col justify-between">
    <h1 className="text-5xl mb-4 font-bold">{body}</h1>
    <p className="text-gray-600 mt-auto">{title}</p>
  </div>

  <div className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-auto overflow-hidden relative">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>
</div>

  );
}

export default FirstLine;
