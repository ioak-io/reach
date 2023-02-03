import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import { BlockService } from 'elements';
import './SpotlightLink.scss';
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
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl(BlockService.getFirstImage(props.article.description));
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
            src={imageUrl.data.raw.urls.regular}
            alt={imageUrl.data.raw.alt_description}
          />
        </div>
      )}
      <div className="spotlight-link">
        {props.category && (
          <div className="spotlight-link__category">{props.category.name}</div>
        )}

        <div className="spotlight-link__container">
          <p
            className={`spotlight-link__description three-liner ${typographyCompose(
              {
                variant: 'body1',
                color: 'inherit',
              }
            )}`}
          >
            <a href={`/#${location.pathname}?type=view&id=${props.article.id}`}>
              {BlockService.toText(props.article?.title)}
            </a>
          </p>
          <ArticleMeta article={props.article} show={['date']} />
        </div>
      </div>
    </div>
  );
};

export default SpotlightLink;
