import React from 'react'
import BigArticle from './ArticleBox/BigArticle'
import FirstLine from './ArticleBox/FirstLine'
import SmallArticle from './ArticleBox/SmallArticle'

function ArticleBox() {
  return (
    <div className="lg:w-5/6 w-full h-full pt-8 pb-8 px-2 border-black flex flex-wrap flex-grow items-stretch justify-evenly">
      <BigArticle />
      <SmallArticle />
      <FirstLine />
      <SmallArticle />
      <SmallArticle />
      <SmallArticle />
    </div>
  );
}

export default ArticleBox
