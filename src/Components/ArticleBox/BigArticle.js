import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal, fetchScrapedData } from '../../store/modalSlice';

function BigArticle({ item }) {
  const dispatch = useDispatch();
  const { title, body, imageUrl, link } = item;

  const handleModal = async (url) => {
    dispatch(fetchScrapedData(url));
    dispatch(toggleModal());
  };

  return (
    <article
      className="flex flex-col lg:flex-row gap-4 bg-white shadow-lg border-t-2 border-black overflow-hidden h-full transform transition-all duration-300 ease-in-out hover:z-50 hover:bg-gray-200 hover:border-black relative cursor-pointer"
      onClick={() => handleModal(link)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleModal(link);
        }
      }}
    >
      <div className="w-full lg:w-1/3 h-auto overflow-hidden">
        <picture>
          <source type="image/webp" srcSet={imageUrl} />
          <img
            className="w-full h-full object-contain sm:object-cover"
            src={imageUrl}
            alt={title}
            loading="lazy"
          />
        </picture>
      </div>

      <div className="flex flex-col justify-between p-4 w-full lg:w-2/3">
        <h2 className="text-xl font-bold mb-2 line-clamp-3">{body}</h2>
        <p className="text-gray-600 mt-6 text-lg line-clamp-1">{title}</p>
      </div>
    </article>
  );
}

export default BigArticle;
