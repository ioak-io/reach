import React, { useEffect, useState } from 'react';
import './Spotlight.css';
// import ArticleLink from '../../ArticleLink';
import { Article } from '../../../types/ArticleType';
import ArticleLink from '../ArticleLink';
import SpotlightLink from './SpotlightLink';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  articles?: any[];
  categoryMap: any;
  meta?: ReachArticleListMeta;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const Spotlight = (props: Props) => {
  // const handleSubmit = () => {
  //   refetch();
  // };
  return (
    <div className="spotlight">
      <div className="spotlight-container">
        {props.articles?.map((item: Article) => (
          <SpotlightLink
            key={item.id}
            meta={props.meta}
            article={item}
            category={
              item.categoryId ? props.categoryMap[item.categoryId] : null
            }
            viewArticleBaseUrl={props.viewArticleBaseUrl}
            onArticleClick={props.onArticleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
