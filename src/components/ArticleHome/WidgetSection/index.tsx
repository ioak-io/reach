import React, { useEffect, useState } from 'react';
import './style.scss';
import { ReachWidget } from '../../../types/ReachWidgetType';
import { ReachArticleDataPageType } from '../../../types/ReachArticleDataPageType';
import ArticleListWidget from '../widgets/ArticleListWidget';
import Divider from '../../../blog/ui/display/Divider';
import FeaturedArticleSection from '../FeaturedArticleSection';
import { Article } from '../../../types/ArticleType';
import FeaturedArticleListWidget from '../widgets/FeaturedArticleListWidget';
import SearchSection from '../SearchSection';
import CategoryListWidget from '../widgets/CategoryListWidget';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import TagListWidget from '../widgets/TagListWidget';

interface Props {
  articleSecondaryListData?: Map<String, ReachArticleDataPageType>;
  articlePrimaryListData?: ReachArticleDataPageType;
  articleFeaturedListData?: Map<String, Article[]>;
  categories: ArticleCategory[];
  tags: string[];
  handleFetchPrimaryArticles: Function;
  handleFetchSecondaryArticles: Function;
  searchByText: Function;
  searchByCategory: Function;
  searchByTag: Function;
  saveCategory: Function;
  widget: ReachWidget;
  criteria: any;
  categoryMap: any;
  slots: any;
}

const WidgetSection = (props: Props) => {
  return (
    <div className="widget-section">
      {['article-primary-list', 'article-secondary-list'].includes(
        props.widget.type
      ) && (
        <ArticleListWidget
          categoryMap={props.categoryMap}
          criteria={props.criteria}
          widget={props.widget}
          articleSecondaryListData={props.articleSecondaryListData}
          articlePrimaryListData={props.articlePrimaryListData}
          handleFetchPrimaryArticles={props.handleFetchPrimaryArticles}
          handleFetchSecondaryArticles={props.handleFetchSecondaryArticles}
        />
      )}
      {props.widget.type === 'divider' && <Divider />}
      {props.widget.type === 'article-featured-list' && (
        <FeaturedArticleListWidget
          articleFeaturedListData={props.articleFeaturedListData}
          widget={props.widget}
        />
      )}
      {props.widget.type === 'search-bar' && (
        <SearchSection
          handleSubmit={props.searchByText}
          text={props.criteria.text}
        />
      )}
      {props.widget.type === 'category-list' && (
        <CategoryListWidget
          categories={props.categories}
          saveCategory={props.saveCategory}
          searchByCategory={props.searchByCategory}
          widget={props.widget}
        />
      )}
      {props.widget.type === 'tag-list' && (
        <TagListWidget
          tags={props.tags}
          searchByTag={props.searchByTag}
          widget={props.widget}
        />
      )}
      {props.widget.type === 'custom' &&
        props.slots[props.widget.identifier || '']}
    </div>
  );
};

export default WidgetSection;
