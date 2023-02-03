import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import { BlockService } from 'elements';
import './BulletinLink.scss';
import { Article } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import { ReachArticleListMeta } from '../../../types/ReachArticleListMetaType';

interface Props {
  article: Article;
  category?: ArticleCategory;
  meta: ReachArticleListMeta;
}

const BulletinLink = (props: Props) => {
  const location = useLocation();
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl(BlockService.getFirstImage(props.article.description));
  }, [props.article]);

  return (
    <div className="bulletin-link">
      {imageUrl && (
        <div
          className={`bulletin-link__image bulletin-link__image--height-${props.meta.imageHeight}`}
        >
          <img
            src={imageUrl.data.raw.urls.regular}
            alt={imageUrl.data.raw.alt_description}
          />
        </div>
      )}
      <div
        className={`bulletin-link__text ${
          props.meta?.materialize ? 'bulletin-link__text--materialize' : ''
        }`}
      >
        <h3 className="bulletin-link__text__title">
          <a
            href={`/#${location.pathname}?type=view&id=${props.article.id}`}
            className="bulletin-link__text__title__a one-liner"
          >
            {BlockService.toText(props.article?.title)}
            {/* {props.article?.title} */}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default BulletinLink;
