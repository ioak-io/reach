import React, { useEffect, useState } from 'react';
import './style.scss';
import { ReachArticleDataPageType } from '../../../types/ReachArticleDataPageType';
import { Article } from '../../../types/ArticleType';
import { ArticleCategory } from '../../../types/ArticleCategoryType';
import { ReachWidgetGroup } from '../../../types/ReachWidgetGroup';
import WidgetSection from '../WidgetSection';

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
  widgetGroup: ReachWidgetGroup;
  criteria: any;
  categoryMap: any;
  slots: any;
}

const WidgetGroupSection = (props: Props) => {
  return (
    <div
      className={`widget-group-section widget-group-section--orientation-${
        props.widgetGroup.orientation || 'one-column'
      }`}
    >
      {props.widgetGroup?.widgets?.map((item, index) => (
        <WidgetSection
          key={`${item.identifier || 'identifier'} + ${index}` || index}
          slots={props.slots}
          widget={item}
          criteria={props.criteria}
          articleFeaturedListData={props.articleFeaturedListData}
          articleSecondaryListData={props.articleSecondaryListData}
          articlePrimaryListData={props.articlePrimaryListData}
          categories={props.categories}
          tags={props.tags}
          categoryMap={props.categoryMap}
          searchByCategory={props.searchByCategory}
          searchByText={props.searchByText}
          searchByTag={props.searchByTag}
          saveCategory={props.saveCategory}
          handleFetchPrimaryArticles={props.handleFetchPrimaryArticles}
          handleFetchSecondaryArticles={props.handleFetchSecondaryArticles}
        />
      ))}
      {props.widgetGroup?.widgetGroups?.map((item, index) => (
        <WidgetGroupSection
          key={`${item.orientation || 'identifier'} + ${index}` || index}
          slots={props.slots}
          widgetGroup={item}
          criteria={props.criteria}
          articleFeaturedListData={props.articleFeaturedListData}
          articleSecondaryListData={props.articleSecondaryListData}
          articlePrimaryListData={props.articlePrimaryListData}
          categories={props.categories}
          tags={props.tags}
          categoryMap={props.categoryMap}
          searchByCategory={props.searchByCategory}
          searchByText={props.searchByText}
          searchByTag={props.searchByTag}
          saveCategory={props.saveCategory}
          handleFetchPrimaryArticles={props.handleFetchPrimaryArticles}
          handleFetchSecondaryArticles={props.handleFetchSecondaryArticles}
        />
      ))}
    </div>
  );
};

export default WidgetGroupSection;
