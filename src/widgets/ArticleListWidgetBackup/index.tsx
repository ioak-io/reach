import React, { useEffect, useState } from 'react';
import ArticleListVariantType from '../../types/ArticleListVariantType';
import { Article } from '../../types/ArticleType';
import OrientationType from '../../types/OrientationType';
import { ReachArticleListMeta } from '../../types/ReachArticleListMetaType';
import ListArticle from './ListArticle';
import './style.css';

export interface ArticleListWidgetBackupProps {
  variant?: ArticleListVariantType;
  meta?: ReachArticleListMeta;
  articles: Article[];
  viewArticleBaseUrl?: string;
  onArticleClick?: any;
}

const ArticleListWidgetBackup = (props: ArticleListWidgetBackupProps) => {
  return (
    <div className={`reach-article-list-widget`}>
      <ListArticle articles={props.articles}
        variant={props.variant}
        meta={props.meta} viewArticleBaseUrl={props.viewArticleBaseUrl} onArticleClick={props.onArticleClick} />
    </div>
  );
};

export default ArticleListWidgetBackup;
