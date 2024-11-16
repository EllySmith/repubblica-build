import React from 'react'

function BigArticle({ item }) {
     const { title, body, tags } = item;

     return (
          <div className="w-3/5 p-4 border box-border text-2xl">
               <h1>{title}</h1>
               <p>{body}</p>
               <p className='text-xs'> {tags.join(' ')}</p>
          </div>
     )
}

export default BigArticle
