import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BigArticle from './ArticleBox/BigArticle';
import FirstLine from './ArticleBox/FirstLine';
import SmallArticle from './ArticleBox/SmallArticle';
import { fetchPageState } from '../store/contentSlice';
import LoadingMessage from './ArticleBox/LoadingMessage';

function ArticleBox() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.content.articles);

  useEffect(() => {
    dispatch(fetchPageState());
    console.log(articles);
  }, [dispatch]);

  return (
    <div className="lg:w-5/6 w-full h-full pt-8 pb-8 px-2 gap-y-4 border-black flex flex-wrap flex-grow items-stretch justify-evenly">
      {articles.length > 0 ? (
        articles.map((article) => {
          if (article.importance === 'low') {
            return <SmallArticle key={article.id} item={article} />;
          } else if (article.importance === 'normal') {
            return <BigArticle key={article.id} item={article} />;
          } else if (article.importance === 'breaking') {
            return <FirstLine key={article.id} item={article} />;
          }
          return null;
        })
      ) : ( 
      <LoadingMessage />
      )}
    </div>
  );
}

export default ArticleBox;
