import React, { useEffect, useState } from 'react';
import './style.css';
// import ArticleLink from '../../ArticleLink';
import { Article } from '../../../types/ArticleType';
import ArticleLink from './ArticleLink';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

export interface BasicListProps {
  hideImage?: boolean;
  articles?: Article[];
  categoryMap: any;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const BasicList = (props: BasicListProps) => {
  return (
    <div className="reach-basic-list">
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

export default BasicList;
