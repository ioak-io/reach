import React, { useEffect, useState } from 'react';
import { Comment } from '../../types/CommentType';
import { getUser, User, UserMap } from '../../types/UserType';
import './CommentView.css';
import MetadataView from './MetadataView';

export type CommentViewProps = {
  comment: Comment;
  userMap: UserMap;
}

const CommentView = (props: CommentViewProps) => {
  return (
    <div className="reach-comments-widget-view">
      <MetadataView comment={props.comment} userMap={props.userMap} />
      <div
        className="reach-comments-widget-view__description"
        dangerouslySetInnerHTML={{ __html: props.comment.description }}
      />
    </div>
  );
};

export default CommentView;
