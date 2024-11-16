import React from 'react'

function BigArticle({ item }) {
     const { title, body, imageUrl } = item;

  return (
    <div className="w-4/6 p-4 border box-border flex">
      <div className="flex-1 w-1/3">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{body}</p>
      </div>
      
      <div className="flex-shrink-0 w-2/3">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
}

export default BigArticle
