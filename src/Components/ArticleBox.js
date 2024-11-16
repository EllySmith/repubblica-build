import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BigArticle from './ArticleBox/BigArticle';
import FirstLine from './ArticleBox/FirstLine';
import { fetchPageState } from '../store/contentSlice';
import LoadingMessage from './ArticleBox/LoadingMessage';

function ArticleBox() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.content.articles) || [];

  useEffect(() => {
    dispatch(fetchPageState());
  }, [dispatch]);

  console.log(articles);

  return (
    <div className="lg:w-full w-full h-full pt-8 pb-8 px-4 flex flex-wrap gap-y-8">
      {articles.length > 0 ? (
        <>
          {articles.map((article) => {
            if (article.importance === 'breaking') {
              return (
                <div className="w-full" key={article.id}>
                  <FirstLine item={article} />
                </div>
              );
            } else if (article.importance === 'low') {
              return (
                <div className="w-full sm:w-1/3" key={article.id}>
                  <BigArticle item={article} />
                </div>
              );
            }
            return null;
          })}
        </>
      ) : (
        <LoadingMessage />
      )}
    </div>
  );
}

export default ArticleBox;
