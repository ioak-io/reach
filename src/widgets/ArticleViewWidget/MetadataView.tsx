import React, { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar';
import Seperator from '../../components/Seperator';
import { Article } from '../../types/ArticleType';
import { getUser, User, UserMap } from '../../types/UserType';
import './MetadataView.css';

export type MetadataViewProps = {
  article: Article;
  userMap: UserMap;
}

const MetadataView = (props: MetadataViewProps) => {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(getUser(props.article?.createdBy, props.userMap));
  }, [props.userMap, props.article]);

  return (
    <div className="reach-article-view-widget-metadata">
      <div className="reach-article-view-widget-metadata__left">
        <Avatar user={user} size="large" />
      </div>
      <div className="reach-article-view-widget-metadata__right">
        <div className="reach-article-view-widget-metadata__right__top">
          <span>
            {user?.firstName} {user?.lastName}
          </span>
        </div>
        <div className="reach-article-view-widget-metadata__right__bottom">
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

export default MetadataView;
