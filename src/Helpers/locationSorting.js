export const sortingLocation = (locationPath, location) => {
  const sorted = locationPath.pathname.replace(`/${location}/`, "");
  return sorted;
};
