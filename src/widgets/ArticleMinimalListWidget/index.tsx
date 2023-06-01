import React, { useEffect, useState } from 'react';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import ArticleLink from './ArticleLink';
import './style.css';

export interface ArticleMinimalListWidgetProps {
  hideImage?: boolean;
  striped?: boolean;
  articles?: Article[];
  categories: ArticleCategory[];
  users: User[];
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ArticleMinimalListWidget = (props: ArticleMinimalListWidgetProps) => {
  const [categoryMap, setCategoryMap] = useState<ArticleCategoryMap>({});
  const [userMap, setUserMap] = useState<UserMap>({});

  useEffect(() => {
    setCategoryMap(toArticleCategoryMap(props.categories));
  }, [props.categories]);

  useEffect(() => {
    setUserMap(toUserMap(props.users));
  }, [props.users]);

  return (
    <div className="reach-article-minimal-list-widget">
      {props.articles?.map((item: Article) => (
        <ArticleLink
          key={item.id}
          hideImage={props.hideImage}
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

export default ArticleMinimalListWidget;
