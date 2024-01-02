import React, { useEffect, useState } from 'react';
import './style.css';
import { Article, getFeaturedImage } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';
import { getCategoryName } from '../../../utils/ArticleUtils';
import { ArticleCategoryMap } from '../../../types/ArticleCategoryType';
import { UserMap } from '../../../types/UserType';
import Seperator from '../../../components/Seperator';
import { htmlToText } from '../../../utils/TextUtils';

interface Props {
  article: Article;
  categoryMap: ArticleCategoryMap;
  userMap: UserMap;
  hideImage?: boolean;
  outline?: boolean;
  backgroundFill?: boolean;
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ArticleLink = (props: Props) => {
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl(getFeaturedImage(props.article));
  }, [props.article]);

  return (
    <div className={`reach-article-grid-widget-article-link ${props.outline && !props.backgroundFill ? "reach-article-grid-widget-article-link--outline" : ""} ${props.backgroundFill ? "reach-article-grid-widget-article-link--background-fill" : ""}`}>
      {!props.hideImage && imageUrl && (
        <div
          className="reach-article-grid-widget-article-link__image">
          <img
            src={imageUrl}
            alt={"imageUrl.data.raw.alt_description"}
          />
        </div>
      )}
      <div className="reach-article-grid-widget-article-link__main">
        <h3 className="reach-article-grid-widget-article-link__main__title">
          <a
            href={`${props.viewArticleBaseUrl}${props.article.id}`}
            className="reach-article-grid-widget-article-link__main__title__a"
          >
            {props.article?.title}
          </a>
        </h3>
        <p
          className={`reach-article-grid-widget-article-link__main__description`}
        >
          {(props.article.summary || htmlToText(props.article.description)).substring(0, 200).trim()}{(props.article.summary || htmlToText(props.article.description)).length > 200 ? '...' : ''}
        </p>
        <div
          className="reach-article-grid-widget-article-link__main__timestamp small"
        >
          <span className="reach-article-grid-widget-article-link__main__timestamp__created-on">Nov 29, 2022</span>
          <Seperator />
          <span className="reach-article-grid-widget-article-link__main__timestamp__read-time">2 mins read</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleLink;
