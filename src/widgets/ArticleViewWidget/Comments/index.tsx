import React, { useEffect, useState } from 'react';
import { Comment } from '../../../types/CommentType';
import CommentView from './CommentView';
import './style.css';

export type CommentsProps = {
  comments: Comment[];
  outline?: boolean;
}

const Comments = (props: CommentsProps) => {

  return (
    <div className={`reach-article-view-widget-comment ${props.outline ? "reach-article-view-widget-comment--outline" : ""}`}>
      <h2>Comments</h2>
      <div>
        <textarea/>
      </div>
      <div className="reach-article-view-widget-comment__main">
        {props.comments.map((comment) => <CommentView key={comment.id} comment={comment} />)}
      </div>
    </div>
  );
};

export default Comments;
