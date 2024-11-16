import React from 'react'
import BigArticle from './ArticleBox/BigArticle'
import FirstLine from './ArticleBox/FirstLine'
import SmallArticle from './ArticleBox/SmallArticle'

function ArticleBox() {
  return (
    <div className="w-5/6 h-full pt-8 pb-8 pl-2 pr-2 border-black flex flex-wrap flex-grow items-stretch justify-evenly">
      <BigArticle />
      <SmallArticle />
      <FirstLine />
      <SmallArticle />
      <SmallArticle />
      <SmallArticle />
    </div>
  )
}

export default ArticleBox
