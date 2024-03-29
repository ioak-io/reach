import React, { useEffect, useState } from 'react';
import './style.css';
import { Article } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';
import { getCategoryName } from '../../../utils/ArticleUtils';

interface Props {
  article: Article;
  categoryMap: any;
  hideImage?: boolean;
  meta?: ReachArticleListMeta;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ArticleLink = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl("https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
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
        {getCategoryName(props.article, props.categoryMap) && (
          <div
            className=""
          >
            {getCategoryName(props.article, props.categoryMap)}
          </div>
        )}
        <h3 className="article-link__title">
          <a
            href={`${props.viewArticleBaseUrl}${props.article.id}`}
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
            href={`${props.viewArticleBaseUrl}${props.article.id}`}
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
