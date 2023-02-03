/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { BlockService } from 'elements';
import { useHistory, useLocation } from 'react-router';
import { compose as linkCompose } from '@oakui/core-stage/style-composer/OakLinkComposer';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import './FeaturedArticleItem.scss';
import Tag from '../../../blog/ui/tag/Tag';
import { Article } from '../../../types/ArticleType';
import ArticleMeta from '../ArticleMeta';

interface Props {
  article: any;
}

const FeaturedArticleItem = (props: Props) => {
  const location = useLocation();
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState<any>(null);

  useEffect(() => {
    setImageUrl(BlockService.getFirstImage(props.article.description));
  }, [props.article]);

  return (
    <div className="featured-article-item">
      {imageUrl && (
        <div className="featured-article-item__image">
          <img
            onClick={() =>
              history.push(
                `${location.pathname}?type=view&id=${props.article.id}`
              )
            }
            src={imageUrl.data.raw.urls.regular}
            alt={imageUrl.data.raw.alt_description}
          />
        </div>
      )}
      <div className="featured-article-item__right">
        <p className="featured-article-item__right__title three-liner">
          <a
            href={`/#${location.pathname}?type=view&id=${props.article.id}`}
            className={typographyCompose({
              baseClass: linkCompose({
                baseClass: 'featured-article-item__title__a',
                color: 'default',
                underlineStyle: 'none',
                textStyle: 'hover',
              }),
              variant: 'body2',
            })}
          >
            {BlockService.toText(props.article?.title)}
          </a>
        </p>
        <div className="featured-article-item__right__meta">
          <ArticleMeta article={props.article} show={['date']} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticleItem;
