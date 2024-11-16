import React from 'react';

function BigArticle({ item }) {
  const { title, body, imageUrl } = item;

  return (
    <article className="flex flex-col lg:flex-row gap-4 bg-white shadow-lg border-t-2 border-black overflow-hidden h-full transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="w-full lg:w-1/3">
        <picture>
          <source type="image/webp" srcSet={imageUrl} />
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
          />
        </picture>
      </div>

      <div className="flex flex-col justify-between p-4 w-full lg:w-2/3">
        <h2 className="text-xl font-bold mb-2">{body}</h2>
        <p className="text-gray-600">{title}</p>
      </div>
    </article>
  );
}

export default BigArticle;
