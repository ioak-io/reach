import React, { useEffect, useState } from 'react';
import './style.scss';
import { ReachWidget } from '../../../../types/ReachWidgetType';
import { Article } from '../../../../types/ArticleType';
import FeaturedArticleSection from '../../FeaturedArticleSection';
import CategorySection from '../../CategorySection';
import { ArticleCategory } from '../../../../types/ArticleCategoryType';

interface Props {
  categories: ArticleCategory[];
  searchByCategory: Function;
  saveCategory: Function;
  widget: ReachWidget;
}

const CategoryListWidget = (props: Props) => {
  return (
    <div className="category-list-widget">
      <CategorySection
        categories={props.categories}
        handleClick={props.searchByCategory}
        saveCategory={props.saveCategory}
      />
    </div>
  );
};

export default CategoryListWidget;
