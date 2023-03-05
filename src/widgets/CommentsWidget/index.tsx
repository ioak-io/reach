import React, { useEffect, useState } from 'react';
import { Comment } from '../../types/CommentType';
import { toUserMap, User, UserMap } from '../../types/UserType';
import CommentView from './CommentView';
import './style.css';

export type CommentsWidgetProps = {
  comments: Comment[];
  users: User[];
  outline?: boolean;
}

const CommentsWidget = (props: CommentsWidgetProps) => {
  const [userMap, setUserMap] = useState<UserMap>({});

  useEffect(() => {
    setUserMap(toUserMap(props.users));
  }, [props.users]);

  return (
    <div className={`reach-comments-widget ${props.outline ? "reach-comments-widget--outline" : ""}`}>
      <div className="reach-comments-widget__main">
        {props.comments.map((comment) => <CommentView key={comment.id} comment={comment} userMap={userMap} />)}
      </div>
    </div>
  );
};

export default CommentsWidget;
