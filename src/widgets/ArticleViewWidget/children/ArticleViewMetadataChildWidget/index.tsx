import React, { useEffect, useState } from 'react';
import Avatar from '../../../../components/Avatar';
import Seperator from '../../../../components/Seperator';
import { ArticleCategory, ArticleCategoryMap, toArticleCategoryMap } from '../../../../types/ArticleCategoryType';
import { Article } from '../../../../types/ArticleType';
import { getUser, toUserMap, User, UserMap } from '../../../../types/UserType';
import './style.css';

export type ArticleViewMetadataChildWidgetProps = {
  article: Article;
  categories?: ArticleCategory[];
  users?: User[];
}

const ArticleViewMetadataChildWidget = (props: ArticleViewMetadataChildWidgetProps) => {
  const [categoryMap, setCategoryMap] = useState<ArticleCategoryMap>({});
  const [userMap, setUserMap] = useState<UserMap>({});

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

  return (
    <div className="reach-article-view-metadata-child-widget">
      <div className="reach-article-view-metadata-child-widget__left">
        <Avatar user={user} size="large" />
      </div>
      <div className="reach-article-view-metadata-child-widget__right">
        <div className="reach-article-view-metadata-child-widget__right__top">
          <span>
            {user?.firstName} {user?.lastName}
          </span>
        </div>
        <div className="reach-article-view-metadata-child-widget__right__bottom">
          <span>
            Nov 29, 2022
          </span>
          <Seperator />
          <span>
            2 mins
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleViewMetadataChildWidget;
