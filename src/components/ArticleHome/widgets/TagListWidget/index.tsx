import React, { useEffect, useState } from 'react';
import './style.scss';
import { ReachWidget } from '../../../../types/ReachWidgetType';
import { Article } from '../../../../types/ArticleType';
import FeaturedArticleSection from '../../FeaturedArticleSection';
import CategorySection from '../../CategorySection';
import { ArticleCategory } from '../../../../types/ArticleCategoryType';
import TagSection from '../../TagSection';
import { ArticleTag } from '../../../../types/ArticleTag';

interface Props {
  tags: string[];
  searchByTag: Function;
  widget: ReachWidget;
}

const TagListWidget = (props: Props) => {
  return (
    <div className="tag-list-widget">
      <TagSection tags={props.tags} handleClick={props.searchByTag} />
    </div>
  );
};

export default TagListWidget;
