export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  [key: string]: any;
};

export type UserMap = {
  [key: string]: User;
}

export const toUserMap = (users: User[]) => {
  const _userMap: UserMap = {};
  users?.forEach((item) => {
    _userMap[item.id] = item;
  })
  return _userMap;
}

const anonymousAvatarUrl = "";

const anonymousUser: User = {
  id: "anonymous",
  firstName: "Anonymous",
  lastName: "",
  avatarUrl: anonymousAvatarUrl
}

export const getAvatarUrl = (user?: User, userMap?: UserMap) => {
  if (!user?.avatarUrl && userMap && userMap["anonymous"]) {
    return userMap["anonymous"].avatarUrl || anonymousAvatarUrl;
  }
  if (!user?.avatarUrl) {
    return anonymousAvatarUrl;
  }
  return user.avatarUrl
}

export const getUser = (id: string, userMap: UserMap) => {
  if (!id || !userMap || !userMap[id]) {
    return anonymousUser;
  }

  return userMap[id];
}
