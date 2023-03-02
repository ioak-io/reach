import React, { useEffect, useState } from 'react';
import { getAvatarUrl, User } from '../../types/UserType';
import './style.css';

export type AvatarProps = {
  user?: User;
}

const Avatar = (props: AvatarProps) => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    setAvatarUrl(getAvatarUrl(props.user));
  }, [props.user]);

  return (
    <div className="reach-avatar">
      <img src={avatarUrl} />
    </div>
  );
};

export default Avatar;
