import React, { useEffect, useState } from 'react';
import ArticleListWidget, { ArticleListWidgetBackupProps } from '.';
import { articles } from '../../components/Blog/ArticlesData';

const ArticleListWidgetWrapper = (props: ArticleListWidgetBackupProps) => {
  return (
    <ArticleListWidget
      variant={props.variant}
      articles={articles} meta={props.meta} viewArticleBaseUrl="/#/article/" />
  );
};

export default ArticleListWidgetWrapper;
