import React, { useEffect, useState } from 'react';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import ArticleLink from './ArticleLink';
import './style.css';

export interface ArticleGridWidgetProps {
  hideImage?: boolean;
  outline?: boolean;
  backgroundFill?: boolean;
  articles?: Article[];
  categories: ArticleCategory[];
  users: User[];
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ArticleGridWidget = (props: ArticleGridWidgetProps) => {
  const [categoryMap, setCategoryMap] = useState<ArticleCategoryMap>({});
  const [userMap, setUserMap] = useState<UserMap>({});

  useEffect(() => {
    setCategoryMap(toArticleCategoryMap(props.categories));
  }, [props.categories]);

  useEffect(() => {
    setUserMap(toUserMap(props.users));
  }, [props.users]);

  return (
    <div className='reach-article-grid-widget'>
      {props.articles?.map((item: Article) => (
        <ArticleLink
          key={item.id}
          hideImage={props.hideImage}
          outline={props.outline}
          backgroundFill={props.backgroundFill}
          article={item}
          categoryMap={categoryMap}
          userMap={userMap}
          viewArticleBaseUrl={props.viewArticleBaseUrl}
          onArticleClick={props.onArticleClick}
        />
      ))}
    </div>
  );
};

export default ArticleGridWidget;
