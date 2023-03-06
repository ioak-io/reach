import React, { ReactChildren, ReactElement, ReactNode, useEffect, useState } from 'react';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { getUser, toUserMap, User, UserMap } from '../../types/UserType';
import './style.css';

export type ArticleViewWidgetProps = {
  article: Article;
  categories: ArticleCategory[];
  users: User[];
  children: ReactElement | ReactElement[];
}

const ArticleViewWidget = (props: ArticleViewWidgetProps) => {
  const [categoryMap, setCategoryMap] = useState<ArticleCategoryMap>({});
  const [userMap, setUserMap] = useState<UserMap>({});
  const [childWidgets, setChildWidgets] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    if (props.categories) {
      setCategoryMap(toArticleCategoryMap(props.categories));
    }
  }, [props.categories]);

  useEffect(() => {
    if (props.users) {
      setUserMap(toUserMap(props.users));
    }
  }, [props.users]);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(getUser(props.article?.createdBy, userMap));
  }, [userMap, props.article]);

  useEffect(() => {
    const _childWidgets: ReactNode[] = [];
    React.Children.forEach(props.children, (child: ReactElement) => {
      _childWidgets.push(React.cloneElement(child, { article: props.article, categoryMap, userMap, user }));
    })

    setChildWidgets(_childWidgets);
  }, [props.children, props.article, categoryMap, userMap]);

  return (
    <div className="reach-article-view-widget">
      {childWidgets}
    </div>
  );
};

export default ArticleViewWidget;
