import React, { useEffect, useState } from 'react';
import ArticleListWidget, { ArticleListWidgetProps } from '.';
import { articles } from '../../components/Blog/ArticlesData';

const ArticleListWidgetWrapper = (props: ArticleListWidgetProps) => {
  return (
    <ArticleListWidget
      variant={props.variant}
      articles={articles} meta={props.meta} viewArticleBaseUrl="/#/article/" />
  );
};

export default ArticleListWidgetWrapper;
