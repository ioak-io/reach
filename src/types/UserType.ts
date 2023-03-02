export type User = {
  id: string;
  firstName: string;
  lastName: string;
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

export const anonymousUser: User = {
  id: "anonymous",
  firstName: "Anonymous",
  lastName: ""
}

export const getUser = (id: string, userMap: UserMap) => {
  if (!id || !userMap || !userMap[id]) {
    return anonymousUser;
  }

  return userMap[id];
}
