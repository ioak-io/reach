import React, { useEffect, useState } from 'react';
import { ArticleCategory } from '../../types/ArticleCategoryType';
import { Comment } from '../../types/CommentType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import CategoryView from './CategoryView';
import './style.css';

export type CategoriesSpotlightWidgetProps = {
  categories: ArticleCategory[];
}

const CategoriesSpotlightWidget = (props: CategoriesSpotlightWidgetProps) => {

  return (
    <div className="reach-categories-spotlight-widget">
      <div className="reach-categories-spotlight-widget__main">
        {props.categories.map((category) => <CategoryView key={category.id} category={category} />)}
      </div>
    </div>
  );
};

export default CategoriesSpotlightWidget;
