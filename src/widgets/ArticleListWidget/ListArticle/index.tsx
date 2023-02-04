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
import ArticleListVariantType from '../../../types/ArticleListVariantType';

interface Props {
  variant?: ArticleListVariantType;
  meta?: ReachArticleListMeta;
  articles: Article[];
  categoryMap?: any;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ListArticle = (props: Props) => {
  return (
    <div className="react-list-article">
      {(!props.variant || props.variant === ArticleListVariantType.list) && (
        <ListSection
          articles={props.articles}
          categoryMap={props.categoryMap}
          meta={props.meta}
          viewArticleBaseUrl={props.viewArticleBaseUrl}
          onArticleClick={props.onArticleClick}
        />
      )}
      {props.variant === ArticleListVariantType.text && (
        <ListSection
          hideImage
          articles={props.articles}
          categoryMap={props.categoryMap}
          meta={props.meta}
          viewArticleBaseUrl={props.viewArticleBaseUrl}
          onArticleClick={props.onArticleClick}
        />
      )}
      {props.variant === ArticleListVariantType.spotlight && (
        <Spotlight
          meta={props.meta}
          articles={props.articles}
          categoryMap={props.categoryMap}
          viewArticleBaseUrl={props.viewArticleBaseUrl}
          onArticleClick={props.onArticleClick}
        />
      )}
      {props.variant === ArticleListVariantType.thumbnail && (
        <Thumbnail
          articles={props.articles}
          meta={props.meta}
          categoryMap={props.categoryMap}
          viewArticleBaseUrl={props.viewArticleBaseUrl}
          onArticleClick={props.onArticleClick}
        />
      )}
      {props.variant === ArticleListVariantType.bulletin && (
        <Bulletin
          articles={props.articles}
          meta={props.meta}
          categoryMap={props.categoryMap}
          viewArticleBaseUrl={props.viewArticleBaseUrl}
          onArticleClick={props.onArticleClick}
        />
      )}
    </div>
  );
};

export default ListArticle;
