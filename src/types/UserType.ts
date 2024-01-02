export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatarUrl?: string;
  aboutHeading?: string;
  aboutDetail?: string;
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

const anonymousAvatarUrl = "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
const anonymousAboutHeading = "Anonymous user";
const anonymousAboutDetail = "";

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

export const getAboutHeading = (user?: User) => {
  if (user) {
    return user.aboutHeading || `${user.firstName} ${user.lastName}`;
  }
  return anonymousUser.firstName;
}

export const getAboutDetail = (user?: User) => {
  if (user) {
    return user.aboutDetail;
  }
  return "";
}

export const getUser = (id: string, userMap: UserMap) => {
  if (!id || !userMap || !userMap[id]) {
    return anonymousUser;
  }

  return userMap[id];
}
