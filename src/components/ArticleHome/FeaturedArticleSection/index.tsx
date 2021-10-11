import React from 'react';
import { compose as typographyCompose } from '@oakui/core-stage/style-composer/OakTypographyComposer';
import './style.scss';
import Tag from '../../../blog/ui/tag/Tag';
import { Article } from '../../../types/ArticleType';
import FeaturedArticleItem from './FeaturedArticleItem';
import { ReachArticleDataPageType } from '../../../types/ReachArticleDataPageType';

interface Props {
  articles?: Article[];
}

const FeaturedArticleSection = (props: Props) => {
  return (
    <>
      <h4
        className={`sidepane-section-title ${typographyCompose({
          variant: 'h4',
        })}`}
      >
        Featured Posts
      </h4>
      <div className="featured-article-section">
        {props.articles?.map((item) => (
          <FeaturedArticleItem key={item.id} article={item} />
        ))}
      </div>
    </>
  );
};

export default FeaturedArticleSection;
