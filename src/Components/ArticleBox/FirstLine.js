import React from 'react'

function FirstLine({ item }) {
     const { title, body, tags } = item;

     return (
          <div className="w-full p-4 border box-border text-4xl">
               <h1>{title}</h1>
               <p>{body}</p>
               <p className='text-xs'> {tags.join(' ')}</p>
          </div>
     )
}

export default FirstLine
