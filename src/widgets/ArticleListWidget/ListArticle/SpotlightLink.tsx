import React, { useEffect, useState } from 'react';
import './SpotlightLink.css';
import { Article } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  meta?: ReachArticleListMeta;
  article: Article;
  category?: ArticleCategory;
}

const SpotlightLink = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl("https://plus.unsplash.com/premium_photo-1671149028241-8e25ffee90dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80");
  }, [props.article]);

  return (
    <div
      className={`spotlight-link__root spotlight-link__root--height-${
        props.meta?.imageHeight || 'medium'
      }`}
    >
      {imageUrl && (
        <div className="spotlight-link__image">
          <img
            src={imageUrl}
            alt={"imageUrl.data.raw.alt_description"}
          />
        </div>
      )}
      <div className="spotlight-link">
        {props.category && (
          <div className="spotlight-link__category">{props.category.name}</div>
        )}

        <div className="spotlight-link__container">
          <p
            className={`spotlight-link__description three-liner`}
          >
            <a href={`/#${location.pathname}?type=view&id=${props.article.id}`}>
              {props.article?.title}
            </a>
          </p>
          <ArticleMeta article={props.article} show={['date']} />
        </div>
      </div>
    </div>
  );
};

export default SpotlightLink;
