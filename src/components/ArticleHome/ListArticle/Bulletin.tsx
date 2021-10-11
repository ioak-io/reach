import React, { useEffect, useState } from 'react';
import './Bulletin.scss';
// import ArticleLink from '../../ArticleLink';
import { Article } from '../../../types/ArticleType';
import ArticleLink from '../ArticleLink';
import BulletinLink from './BulletinLink';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  articles?: any[];
  categoryMap: any;
  meta: ReachArticleListMeta;
}

const Bulletin = (props: Props) => {
  // const handleSubmit = () => {
  //   refetch();
  // };
  return (
    <div className="bulletin">
      <div className="bulletin-container">
        {props.articles?.map((item: Article) => (
          <BulletinLink
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

export default Bulletin;
