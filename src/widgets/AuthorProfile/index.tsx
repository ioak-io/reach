import React, { useEffect, useState } from 'react';
import { Comment } from '../../types/CommentType';
import { getUser, toUserMap, User, UserMap, getAvatarUrl, getAboutHeading, getAboutDetail } from '../../types/UserType';
import './style.css';

export type AuthorProfileProps = {
  user: User;
  horizontal?: boolean;
}

const AuthorProfile = (props: AuthorProfileProps) => {

  return (
    <div className={`reach-author-profile-widget ${props.horizontal ? "reach-author-profile-widget--horizontal" : "reach-comments-widget--vertical"}`}>
      <img src={getAvatarUrl(props.user)} />
      <div className="reach-author-profile-widget__text">
        <h4>{getAboutHeading(props.user)}</h4>
        <p>{getAboutDetail(props.user)}</p>
      </div>
    </div>
  );
};

export default AuthorProfile;
