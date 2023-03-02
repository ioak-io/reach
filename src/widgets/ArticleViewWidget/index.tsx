import React, { useEffect, useState } from 'react';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { Comment } from '../../types/CommentType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import Comments from './Comments';
import MetadataView from './MetadataView';
import './style.css';

export type ArticleViewWidgetProps = {
  article: Article;
  comments: Comment[];
  categories: ArticleCategory[];
  users: User[];
  outline?: boolean;
}

const ArticleViewWidget = (props: ArticleViewWidgetProps) => {
  const [categoryMap, setCategoryMap] = useState<ArticleCategoryMap>({});
  const [userMap, setUserMap] = useState<UserMap>({});

  useEffect(() => {
    setCategoryMap(toArticleCategoryMap(props.categories));
  }, [props.categories]);

  useEffect(() => {
    setUserMap(toUserMap(props.users));
  }, [props.users]);

  return (
    <div className={`reach-article-view-widget ${props.outline ? "reach-article-view-widget--outline" : ""}`}>
      <div className="reach-article-view-widget__main">
        <MetadataView article={props.article} userMap={userMap} />
        <h1 className="reach-article-view-widget__main__title">
          {props.article?.title}
        </h1>
        <p
          className="reach-article-view-widget__main__description"
          dangerouslySetInnerHTML={{ __html: props.article.description }}
        />
      </div>
      <Comments comments={props.comments} userMap={userMap} />
    </div>
  );
};

export default ArticleViewWidget;
