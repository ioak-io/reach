import React, { useEffect, useState } from 'react';
import './Thumbnail.scss';
// import ArticleLink from '../../ArticleLink';
import { Article } from '../../../types/ArticleType';
import ArticleLink from '../ArticleLink';
import ThumbnailLink from './ThumbnailLink';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  articles?: any[];
  categoryMap: any;
  meta: ReachArticleListMeta;
}

const Thumbnail = (props: Props) => {
  // const handleSubmit = () => {
  //   refetch();
  // };
  return (
    <div className="thumbnail">
      <div className="thumbnail-container">
        {props.articles?.map((item: Article) => (
          <ThumbnailLink
            key={item.id}
            article={item}
            category={
              item.categoryId ? props.categoryMap[item.categoryId] : null
            }
            meta={props.meta}
          />
        ))}
      </div>
    </div>
  );
};

export default Thumbnail;
