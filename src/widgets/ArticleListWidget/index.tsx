import React, { useEffect, useState } from 'react';
import { Article } from '../../types/ArticleType';
import OrientationType from '../../types/OrientationType';
import ListArticle from './ListArticle';
import './style.css';

interface Props {
  orientation?: OrientationType;
  articles: Article[];
}

const ArticleListWidget = (props: Props) => {
  return (
    <div className={`reach-article-list-widget reach-widget-group--orientation-${props.orientation || OrientationType.default}`}>
      <ListArticle articles={props.articles} />
    </div>
  );
};

export default ArticleListWidget;
