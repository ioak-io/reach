import React, { useEffect, useState } from 'react';
import { Article } from '../../types/ArticleType';
import ArticleLink from './ArticleLink';
import './style.css';

export interface ArticleListWidgetProps {
  hideImage?: boolean;
  articles?: Article[];
  categoryMap: any;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ArticleListWidget = (props: ArticleListWidgetProps) => {
  return (
    <div className="reach-article-list-widget">
      {props.articles?.map((item: Article) => (
        <ArticleLink
          key={item.id}
          hideImage={props.hideImage}
          article={item}
          categoryMap={props.categoryMap}
          viewArticleBaseUrl={props.viewArticleBaseUrl}
          onArticleClick={props.onArticleClick}
        />
      ))}
    </div>
  );
};

export default ArticleListWidget;
