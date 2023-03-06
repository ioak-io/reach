import React, { useEffect, useState } from 'react';
import ArticleViewWidget from '.';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import ArticleViewBodyChildWidget from './children/ArticleViewBodyChildWidget';
import ArticleViewMetadataChildWidget from './children/ArticleViewMetadataChildWidget';
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
      <ArticleViewBodyChildWidget article={props.article} />
      <ArticleViewBodyChildWidget article={props.article} />
    </ArticleViewWidget>
  );
};

export default ArticleViewWidgetWrapper;
