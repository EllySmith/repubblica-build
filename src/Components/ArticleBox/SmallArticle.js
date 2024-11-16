import React from 'react'

function SmallArticle({ item }) {
     const { title, body, imageUrl } = item;

  return (
    <div className="w-2/6 p-4 border box-border flex">
      <div className="flex-1">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{body}</p>
      </div>
      
      <div className="flex-shrink-0">
        <img src={imageUrl} width="150px" alt={title} />
      </div>
    </div>
  );
}

export default SmallArticle
