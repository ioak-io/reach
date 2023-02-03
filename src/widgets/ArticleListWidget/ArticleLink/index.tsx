import React, { useEffect, useState } from 'react';
import './style.css';
import { Article } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  article: Article;
  hideImage?: boolean;
  category?: ArticleCategory;
  meta?: ReachArticleListMeta;
}

const ArticleLink = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl("https://plus.unsplash.com/premium_photo-1671149028241-8e25ffee90dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80");
  }, [props.article]);

  return (
    <div
      className={`article-link__root ${props.meta?.materialize ? 'article-link__root--materialize' : ''
        }`}
    >
      {!props.hideImage && imageUrl && (
        <div
          className={`article-link__image article-link__image--height-${props.meta?.imageHeight || 'large'
            }`}
        >
          <img
            src={imageUrl}
            alt={"imageUrl.data.raw.alt_description"}
          />
        </div>
      )}
      <div className="article-link">
        {props.category && (
          <div
            className=""
          >
            {props.category.name}
          </div>
        )}
        <h3 className="article-link__title">
          <a
            href={`/#${location.pathname}?type=view&id=${props.article.id}`}
            className="article-link__title__a"
          >
            {props.article?.title}
            {/* {props.article?.title} */}
          </a>
        </h3>

        <div>
          <ArticleMeta
            article={props.article}
            show={['date', 'views', 'feedback']}
          />
        </div>

        <p
          className={`article-link__description five-liner`}
        >
          {props.article.description}
        </p>

        <div className="article-link__more">
          <a
            href={`${location.pathname}?type=view&id=${props.article.id}`}
            className="article-link__more__a"
          >
            Read More SYM
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleLink;
