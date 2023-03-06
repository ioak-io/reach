import React, { useEffect, useState } from 'react';
import { ArticleCategory } from '../../types/ArticleCategoryType';
import { Comment } from '../../types/CommentType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import './style.css';

export type CategoryViewProps = {
  category: ArticleCategory;
}

const CategoryView = (props: CategoryViewProps) => {

  return (
    <div className="reach-categories-spotlight-widget-category-view">
      {props.category.name}
    </div>
  );
};

export default CategoryView;
