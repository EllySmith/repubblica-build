import React from 'react';

function FirstLine({ item }) {
  const { title, body, imageUrl } = item;

  return (
    <div className="w-full sm:w-full md:w-full p-4 border box-border outline outline-black flex mb-4">
      <div className="flex-1 w-full sm:w-2/3">
        <h1 className="text-6xl">{title}</h1>
        <p className="text-4xl">{body}</p>
      </div>
      
      <div className="flex-shrink-0 w-full sm:w-1/3">
        <img src={imageUrl} width="150px" alt={title} className="w-full h-auto" />
      </div>
    </div>
  );
}

export default FirstLine;