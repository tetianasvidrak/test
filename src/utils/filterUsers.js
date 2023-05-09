export const filterUsers = (users, filter, ids) => {
  switch (filter.value) {
    case "all":
      return users;
    case "follow":
      return users.filter((item) => !ids.includes(item.id));
    case "following":
      return users.filter((item) => ids.includes(item.id));
    default:
      break;
  }
};
