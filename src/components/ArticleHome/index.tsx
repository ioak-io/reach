/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { ReachArticleDataPageType } from '../../types/ReachArticleDataPageType';
import { ReachHomeLayout } from '../../types/ReachHomeLayoutType';
import Divider from '../../blog/ui/display/Divider';
import CategorySection from './CategorySection';
import FeaturedArticleSection from './FeaturedArticleSection';
import SearchSection from './SearchSection';
import './style.scss';
import TagSection from './TagSection';
import WidgetSection from './WidgetSection';
import { Article } from '../../types/ArticleType';
import WidgetGroupSection from './WidgetGroupSection';

interface Props {
  articleFeaturedListData?: Map<String, Article[]>;
  articleSecondaryListData?: Map<String, ReachArticleDataPageType>;
  articlePrimaryListData?: ReachArticleDataPageType;
  handleFetchPrimaryArticles: Function;
  handleFetchSecondaryArticles: Function;
  layout: ReachHomeLayout;
  categories: any[];
  categoryMap: any;
  tags: any[];
  criteria: any;
  searchByTag: any;
  searchByText: any;
  searchByCategory: any;
  saveCategory: any;
  slots: any;
}

const ArticleHome = (props: Props) => {
  useEffect(() => {}, [props.articleSecondaryListData]);

  return (
    <>
      <div className="article-home">
        <div className="article-home__top">
          {props.layout.top?.map((item, index) => (
            <WidgetGroupSection
              key={index}
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
        <div className="article-home__middle">
          <div className="article-home__middle__left">
            {props.layout.left.map((item, index) => (
              <WidgetGroupSection
                key={index}
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
                handleFetchSecondaryArticles={
                  props.handleFetchSecondaryArticles
                }
              />
            ))}
          </div>
          <div className="article-home__middle__right">
            {props.layout.right?.map((item, index) => (
              <WidgetGroupSection
                key={index}
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
                handleFetchSecondaryArticles={
                  props.handleFetchSecondaryArticles
                }
              />
            ))}
          </div>
        </div>
        <div className="article-home__bottom">
          {props.layout.bottom?.map((item, index) => (
            <WidgetGroupSection
              key={index}
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
      </div>
    </>
  );
};

export default ArticleHome;
