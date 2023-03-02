import React, { useEffect, useState } from 'react';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../types/ArticleCategoryType';
import { Article } from '../../types/ArticleType';
import { Comment } from '../../types/CommentType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import Comments from './Comments';
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
        <div
          className="reach-article-view-widget__main__timestamp small"
        >
          <div className="reach-article-view-widget__main__timestamp__created-on">Nov 29, 2022</div>
          <div className="reach-article-view-widget__main__timestamp__seperator" />
          <div className="reach-article-view-widget__main__timestamp__read-time">2 min</div>
        </div>
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
