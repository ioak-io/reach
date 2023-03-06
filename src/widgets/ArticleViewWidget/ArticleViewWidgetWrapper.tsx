import React, { useEffect, useState } from 'react';
import ArticleViewWidget from '.';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import ArticleViewBodyChildWidget from './children/ArticleViewBodyChildWidget';
import ArticleViewMetadataChildWidget from './children/ArticleViewMetadataChildWidget';
import ArticleViewTagsChildWidget from './children/ArticleViewTagsChildWidget';
import ArticleViewTitleChildWidget from './children/ArticleViewTitleChildWidget';
import './style.css';

export type ArticleViewWidgetWrapperProps = {
  article: Article;
  categories: ArticleCategory[];
  users: User[];
  children?: any;
}

const ArticleViewWidgetWrapper = (props: ArticleViewWidgetWrapperProps) => {

  return (
    <ArticleViewWidget article={props.article} categories={props.categories} users={props.users}>
      <ArticleViewMetadataChildWidget key="metadata" />
      <ArticleViewTitleChildWidget key="title" />
      <ArticleViewTagsChildWidget key="tags" />
      <ArticleViewBodyChildWidget key="body" />
      <ArticleViewTagsChildWidget key="tags-2" />
    </ArticleViewWidget>
  );
};

export default ArticleViewWidgetWrapper;
