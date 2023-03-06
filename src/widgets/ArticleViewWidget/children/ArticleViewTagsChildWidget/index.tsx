import React, { useEffect, useState } from 'react';
import { Article } from '../../../../types/ArticleType';
import './style.css';

export type ArticleViewTagsChildWidgetProps = {
  [key: string]: any;
  onClick?: any;
}

const ArticleViewTagsChildWidget = (props: ArticleViewTagsChildWidgetProps) => {
  const handleClick = (tag: string, event: any) => {
    props.onClick && props.onClick(tag, event);
  }

  return (
    <div
      className="reach-article-view-tags-child-widget"
    >
      {props.article.tags?.map((tag: string) =>
        <button key={tag} className="reach-article-view-tags-child-widget__tag" onClick={(event) => handleClick(tag, event)}>{tag}</button>
      )}
    </div>
  );
};

export default ArticleViewTagsChildWidget;
