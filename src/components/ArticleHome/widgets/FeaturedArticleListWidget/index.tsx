import React, { useEffect, useState } from 'react';
import './style.scss';
import { ReachWidget } from '../../../../types/ReachWidgetType';
import { Article } from '../../../../types/ArticleType';
import FeaturedArticleSection from '../../FeaturedArticleSection';

interface Props {
  articleFeaturedListData?: Map<String, Article[]>;
  widget: ReachWidget;
}

const FeaturedArticleListWidget = (props: Props) => {
  return (
    <div className="featured-articles-list-widget">
      <FeaturedArticleSection
        articles={props.articleFeaturedListData?.get(
          props.widget.identifier || ''
        )}
      />
    </div>
  );
};

export default FeaturedArticleListWidget;
