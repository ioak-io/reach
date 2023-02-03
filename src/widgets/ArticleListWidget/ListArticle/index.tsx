import React, { useEffect, useState } from 'react';
import './style.css';
import ListSection from './ListSection';
import PageNav from './PageNav';
import { ReachArticleDataPageType } from '../../../types/ReachArticleDataPageType';
import Spotlight from './Spotlight';
import Thumbnail from './Thumbnail';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';
import Bulletin from './Bulletin';
import { Article } from '../../../types/ArticleType';

interface Props {
  // variant?: 'list' | 'thumbnail' | 'spotlight' | 'text';
  meta?: ReachArticleListMeta;
  articles: Article[];
  categoryMap?: any;
}

const ListArticle = (props: Props) => {
  return (
    <div className="react-list-article">
      {(!props.meta?.variant || props.meta?.variant === 'list') && (
        <ListSection
          articles={props.articles}
          categoryMap={props.categoryMap}
          meta={props.meta}
        />
      )}
      {props.meta?.variant === 'text' && (
        <ListSection
          hideImage
          articles={props.articles}
          categoryMap={props.categoryMap}
          meta={props.meta}
        />
      )}
      {props.meta?.variant === 'spotlight' && (
        <Spotlight
          meta={props.meta}
          articles={props.articles}
          categoryMap={props.categoryMap}
        />
      )}
      {props.meta?.variant === 'thumbnail' && (
        <Thumbnail
          articles={props.articles}
          meta={props.meta}
          categoryMap={props.categoryMap}
        />
      )}
      {props.meta?.variant === 'bulletin' && (
        <Bulletin
          articles={props.articles}
          meta={props.meta}
          categoryMap={props.categoryMap}
        />
      )}
    </div>
  );
};

export default ListArticle;
