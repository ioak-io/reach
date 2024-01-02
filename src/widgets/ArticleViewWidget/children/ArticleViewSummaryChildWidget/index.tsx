import React, { useEffect, useState } from 'react';
import { Article } from '../../../../types/ArticleType';
import './style.css';

export type ArticleViewSummaryChildWidgetProps = {
  [key: string]: any;
  // article: Article;
}

const ArticleViewSummaryChildWidget = (props: ArticleViewSummaryChildWidgetProps) => {
  return (
    <p className="reach-article-view-summary-child-widget">
      <strong>
        {props.article?.summary}
      </strong>
    </p>
  );
};

ArticleViewSummaryChildWidget.displayName = "ArticleViewSummaryChildWidget";

export default ArticleViewSummaryChildWidget;
