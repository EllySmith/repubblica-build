import React from 'react'

function SmallArticle({ item }) {
     const { title, body, tags } = item;
     return (
          <div className="w-2/6 p-4 border box-border">
               <h1>{title}</h1>
               <p>{body}</p>
               <p className='text-xs'> {tags.join(' ')}</p>
          </div>
     )
}

export default SmallArticle
