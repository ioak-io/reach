import React, { useEffect, useState } from 'react';
import { Article } from '../../../../types/ArticleType';
import './style.css';

export type ArticleViewBodyChildWidgetProps = {
  [key: string]: any;
}

const ArticleViewBodyChildWidget = (props: ArticleViewBodyChildWidgetProps) => {
  return (
    <p
      className="reach-article-view-body-child-widget"
      dangerouslySetInnerHTML={{ __html: props.article.description }}
    />
  );
};

export default ArticleViewBodyChildWidget;
