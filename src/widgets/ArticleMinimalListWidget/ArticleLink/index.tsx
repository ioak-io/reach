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
  fullWidthImage?: boolean;
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
    <div className={`reach-article-minimal-list-widget-article-link ${props.outline && !props.backgroundFill ? "reach-article-minimal-list-widget-article-link--outline" : ""} ${props.backgroundFill ? "reach-article-minimal-list-widget-article-link--background-fill" : ""} ${props.hideImage ? "reach-article-minimal-list-widget-article-link--hide-image" : ""}`}>
      {!props.hideImage && imageUrl && (
        <div
          className="reach-article-minimal-list-widget-article-link__image">
          <img
            src={imageUrl}
            alt={"imageUrl.data.raw.alt_description"}
          />
        </div>
      )}
      <div className="reach-article-minimal-list-widget-article-link__main">
        <h5 className="reach-article-minimal-list-widget-article-link__main__title">
          <a
            href={`${props.viewArticleBaseUrl}${props.article.id}`}
            className="reach-article-minimal-list-widget-article-link__main__title__a two-liner"
          >
            {props.article?.title}
          </a>
        </h5>
        <div className="reach-article-minimal-list-widget-article-link__main__footer">
          <div className="small">
            Author name
          </div>
          <div
            className="reach-article-minimal-list-widget-article-link__main__timestamp small"
          >
            <span className="reach-article-minimal-list-widget-article-link__main__timestamp__created-on">Nov 29, 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLink;
