import React, { useEffect, useState } from 'react';
import './style.scss';
import ListSection from './ListSection';
import PageNav from './PageNav';
import { ReachArticleDataPageType } from '../../../types/ReachArticleDataPageType';
import Spotlight from './Spotlight';
import Thumbnail from './Thumbnail';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';
import Bulletin from './Bulletin';

interface Props {
  // variant?: 'list' | 'thumbnail' | 'spotlight' | 'text';
  meta?: ReachArticleListMeta;
  articlesPageData?: ReachArticleDataPageType;
  categoryMap: any;
  handlePageChange: any;
}

const ListArticle = (props: Props) => {
  return (
    <div className="browse-article">
      {(!props.meta?.variant || props.meta?.variant === 'list') && (
        <ListSection
          articles={props.articlesPageData?.data}
          categoryMap={props.categoryMap}
          meta={props.meta}
        />
      )}
      {props.meta?.variant === 'text' && (
        <ListSection
          hideImage
          articles={props.articlesPageData?.data}
          categoryMap={props.categoryMap}
          meta={props.meta}
        />
      )}
      {props.meta?.variant === 'spotlight' && (
        <Spotlight
          meta={props.meta}
          articles={props.articlesPageData?.data}
          categoryMap={props.categoryMap}
        />
      )}
      {props.meta?.variant === 'thumbnail' && (
        <Thumbnail
          articles={props.articlesPageData?.data}
          meta={props.meta}
          categoryMap={props.categoryMap}
        />
      )}
      {props.meta?.variant === 'bulletin' && (
        <Bulletin
          articles={props.articlesPageData?.data}
          meta={props.meta}
          categoryMap={props.categoryMap}
        />
      )}
      <PageNav
        handlePageChange={props.handlePageChange}
        totalPages={props.articlesPageData?.pageCount || 1}
        pageNo={props.articlesPageData?.currentPage || 1}
      />
    </div>
  );
};

export default ListArticle;
