import React, { useEffect, useState } from 'react';
import './style.css';
// import ArticleLink from '../../ArticleLink';
import { Article } from '../../../types/ArticleType';
import ArticleLink from '../ArticleLink';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  meta?: ReachArticleListMeta;
  hideImage?: boolean;
  articles?: any[];
  categoryMap: any;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ListSection = (props: Props) => {
  // const handleSubmit = () => {
  //   refetch();
  // };
  return (
    <div className="list-section">
      {/* <OakInfiniteScroll handleChange={fetchMoreArticles} selector=".oak-page"> */}
      <div className="search-results-section">
        <div className="search-results-container">
          {props.articles?.map((item: Article) => (
            <ArticleLink
              key={item.id}
              hideImage={props.hideImage}
              article={item}
              categoryMap={props.categoryMap}
              meta={props.meta}
              viewArticleBaseUrl={props.viewArticleBaseUrl}
              onArticleClick={props.onArticleClick}
            />
          ))}
        </div>
        {/* <div>{loading ? <OakSpinner /> : ''}</div> */}
      </div>
      {/* {data?.getArticles?.hasMore && (
        <div className="list-section__more">
          <OakButton
            handleClick={fetchMoreArticles}
            theme="default"
            size="medium"
            shape="sharp"
          >
            Load more
          </OakButton>
        </div>
      )} */}
      {/* </OakInfiniteScroll> */}
    </div>
  );
};

export default ListSection;
