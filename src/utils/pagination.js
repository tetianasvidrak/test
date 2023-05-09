export const pagination = (pageNumber, pageSize, arr) => {
  const start = 0;
  const end = pageSize * pageNumber;
  return arr.slice(start, end);
};
