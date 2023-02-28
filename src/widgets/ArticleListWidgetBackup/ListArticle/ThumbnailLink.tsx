import React, { useEffect, useState } from 'react';
import './ThumbnailLink.css';
import { Article } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  article: Article;
  category?: ArticleCategory;
  meta?: ReachArticleListMeta;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ThumbnailLink = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl("https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  }, [props.article]);

  return (
    <div className="thumbnail-link">
      {imageUrl && (
        <div
          className={`thumbnail-link__image thumbnail-link__image--height-${props.meta?.imageHeight}`}
        >
          <img
            src={imageUrl}
            alt={"imageUrl.data.raw.alt_description"}
          />
        </div>
      )}
      <div
        className={`thumbnail-link__text ${
          props.meta?.materialize ? 'thumbnail-link__text--materialize' : ''
        }`}
      >
        <h3 className="thumbnail-link__text__title">
          <a
            href={`/#${location.pathname}?type=view&id=${props.article.id}`}
            className="thumbnail-link__text__title__a three-liner"
          >
            {props.article?.title}
            {/* {props.article?.title} */}
          </a>
        </h3>

        <p
          className={`thumbnail-link__text__description five-liner`}
        >
          {props.article.description}
        </p>

        <div>
          <ArticleMeta
            article={props.article}
            show={['date', 'views', 'feedback']}
          />
        </div>
      </div>
    </div>
  );
};

export default ThumbnailLink;
