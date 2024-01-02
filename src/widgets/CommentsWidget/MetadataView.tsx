import React, { useEffect, useState } from 'react';
import Avatar from '../../components/Avatar';
import { Comment } from '../../types/CommentType';
import { getUser, User, UserMap } from '../../types/UserType';
import './MetadataView.css';

export type MetadataViewProps = {
  comment: Comment;
  userMap: UserMap;
}

const MetadataView = (props: MetadataViewProps) => {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(getUser(props.comment?.createdBy, props.userMap));
  }, [props.userMap, props.comment]);

  return (
      <div className="reach-comments-widget-metadata">
        <div className="reach-comments-widget-metadata__left">
          <Avatar user={user} />
        </div>
        <div className="reach-comments-widget-metadata__right small">
          <div className="reach-comments-widget-metadata__right__top">
            {user?.firstName} {user?.lastName}
          </div>
          <div className="reach-comments-widget-metadata__right__bottom">
            <div className="reach-comments-widget-metadata__right__bottom__created-on">Nov 29, 2022</div>
          </div>
        </div>
      </div>
  );
};

export default MetadataView;
