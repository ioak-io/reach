import React, { ReactChildren, ReactNode, useEffect, useState } from 'react';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import './style.css';

export type ArticleViewWidgetProps = {
  article: Article;
  categories: ArticleCategory[];
  users: User[];
  children?: ReactNode | ReactNode[];
}

const ArticleViewWidget = (props: ArticleViewWidgetProps) => {

  const [childWidgets, setChildWidgets] = useState<React.ReactNode[]>([]);

  useEffect(() => {
      const _childWidgets: React.ReactNode[] = [];
      console.log("++++++++++", props.children, typeof props.children);
  }, [props.children]);

  return (
    <div className="reach-article-view-widget">
      {props.children}
    </div>
  );
};

export default ArticleViewWidget;
