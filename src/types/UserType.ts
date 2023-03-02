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
