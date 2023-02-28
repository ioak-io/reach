import React, { useEffect, useState } from 'react';
import './ArticleLink.css';
import { Article } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';
import { getCategoryName } from '../../../utils/ArticleUtils';

interface Props {
  article: Article;
  categoryMap: any;
  hideImage?: boolean;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ArticleLink = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl("https://images.unsplash.com/photo-1519748771451-a94c596fad67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  }, [props.article]);

  return (
    <div className="reach-basic-list-article-link">
      {!props.hideImage && imageUrl && (
        <div
          className="reach-basic-list-article-link__image">
          <img
            src={imageUrl}
            alt={"imageUrl.data.raw.alt_description"}
          />
        </div>
      )}
      <div className="reach-basic-list-article-link__main">
        {getCategoryName(props.article, props.categoryMap) && (
          <div
            className="reach-basic-list-article-link__main__category"
          >
            {getCategoryName(props.article, props.categoryMap)}
          </div>
        )}
        <h3 className="reach-basic-list-article-link__main__title">
          <a
            href={`${props.viewArticleBaseUrl}${props.article.id}`}
            className="reach-basic-list-article-link__main__title__a"
          >
            {props.article?.title}
          </a>
        </h3>

        <div className="reach-basic-list-article-link__main__meta">
          <ArticleMeta
            article={props.article}
            show={['date', 'views', 'feedback']}
          />
        </div>

        <p
          className={`reach-basic-list-article-link__main__description five-liner`}
        >
          {props.article.description}
        </p>

        <div className="reach-basic-list-article-link__main__more">
          <a
            href={`${props.viewArticleBaseUrl}${props.article.id}`}
            className="reach-basic-list-article-link__main__more__a"
          >
            Read More SYM
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleLink;
