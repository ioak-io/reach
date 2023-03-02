import React, { useEffect, useState } from 'react';
import { User } from '../../types/UserType';
import './style.css';

export type CommentsProps = {
  user: User;
}

const Comments = (props: CommentsProps) => {

  return (
    <div className="reach-avatar">
      <img className="reach-avatar__img" src={props.user.avatarUrl} />
    </div>
  );
};

export default Comments;
