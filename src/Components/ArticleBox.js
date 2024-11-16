import React from 'react'
import { useSelector } from 'react-redux'
import BigArticle from './ArticleBox/BigArticle'
import FirstLine from './ArticleBox/FirstLine'
import SmallArticle from './ArticleBox/SmallArticle'

function ArticleBox() {
  const articles = useSelector((state) => state.content.articles)
  return (
    <div className="lg:w-5/6 w-full h-full pt-8 pb-8 px-2 gap-y-4 border-black flex flex-wrap flex-grow items-stretch justify-evenly">
  {articles.map((article) => {
    if (article.importance === 'low') {
      return <SmallArticle key={article.id} item={article} />;
    } else if (article.importance === 'normal') {
      return <BigArticle key={article.id} item={article} />;
    } else if (article.importance === 'breaking') {
      return <FirstLine key={article.id} item={article} />;
    }
    return null;
  })}
</div>
  );
}

export default ArticleBox
