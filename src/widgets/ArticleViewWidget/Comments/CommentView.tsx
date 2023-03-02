import React, { useEffect, useState } from 'react';
import { Comment } from '../../../types/CommentType';
import { getUser, User, UserMap } from '../../../types/UserType';
import './CommentView.css';

export type CommentViewProps = {
  comment: Comment;
  userMap: UserMap;
}

const CommentView = (props: CommentViewProps) => {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(getUser(props.comment?.createdBy, props.userMap));
  }, [props.userMap, props.comment]);

  return (
    <div className="reach-article-view-widget-comment-view">
      <div className="reach-article-view-widget-comment-view__meta">
        <div className="reach-article-view-widget-comment-view__meta__left">
          <img src={user?.avatarUrl} />
        </div>
        <div className="reach-article-view-widget-comment-view__meta__right small">
          <div className="reach-article-view-widget-comment-view__meta__right__top">
            {user?.firstName} {user?.lastName}
          </div>
          <div className="reach-article-view-widget-comment-view__meta__right__bottom">
            <div className="reach-article-view-widget-comment-view__meta__right__bottom__created-on">Nov 29, 2022</div>
            <div className="reach-article-view-widget-comment-view__meta__right__bottom__seperator" />
            <div className="reach-article-view-widget-comment-view__meta__right__bottom__read-time">2 min</div>
          </div>
        </div>
      </div>
      <p
        className="reach-article-view-widget-comment-view__description"
        dangerouslySetInnerHTML={{ __html: props.comment.description }}
      />
    </div>
  );
};

export default CommentView;
