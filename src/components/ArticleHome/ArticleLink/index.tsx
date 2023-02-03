import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import { BlockService } from 'elements';
import './style.scss';
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
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl(BlockService.getFirstImage(props.article.description));
  }, [props.article]);

  return (
    <div
      className={`article-link__root ${
        props.meta?.materialize ? 'article-link__root--materialize' : ''
      }`}
    >
      {!props.hideImage && imageUrl && (
        <div
          className={`article-link__image article-link__image--height-${
            props.meta?.imageHeight || 'large'
          }`}
        >
          <img
            src={imageUrl.data.raw.urls.regular}
            alt={imageUrl.data.raw.alt_description}
          />
        </div>
      )}
      <div className="article-link">
        {props.category && (
          <div
            className={typographyCompose({
              baseClass: 'article-link__category',
              variant: 'subtitle1',
              transform: 'uppercase',
            })}
          >
            {props.category.name}
          </div>
        )}
        <h3 className="article-link__title">
          <a
            href={`/#${location.pathname}?type=view&id=${props.article.id}`}
            className="article-link__title__a"
          >
            {BlockService.toText(props.article?.title)}
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
          className={`article-link__description five-liner ${typographyCompose({
            variant: 'body2',
            color: 'inherit',
          })}`}
        >
          {BlockService.toText(props.article.description)}
        </p>

        <div className="article-link__more">
          <a
            href={`${location.pathname}?type=view&id=${props.article.id}`}
            className="article-link__more__a"
          >
            Read More
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleLink;
