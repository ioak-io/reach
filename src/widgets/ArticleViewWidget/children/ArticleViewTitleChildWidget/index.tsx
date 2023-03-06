import React, { useEffect, useState } from 'react';
import { Article } from '../../../../types/ArticleType';
import './style.css';

export type ArticleViewTitleChildWidgetProps = {
  [key: string]: any;
  // article: Article;
}

const ArticleViewTitleChildWidget = (props: ArticleViewTitleChildWidgetProps) => {
  return (
    <h1 className="reach-article-view-metadata-child-widget">
      {props.article?.title}
    </h1>
  );
};

export default ArticleViewTitleChildWidget;
