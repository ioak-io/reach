import React, { useEffect, useState } from 'react';
import { Article } from '../../../../types/ArticleType';
import './style.css';

export type ArticleViewTagsChildWidgetProps = {
  [key: string]: any;
}

const ArticleViewTagsChildWidget = (props: ArticleViewTagsChildWidgetProps) => {
  return (
    <div
      className="reach-article-view-tags-child-widget"
    >
      tags
    </div>
  );
};

export default ArticleViewTagsChildWidget;
