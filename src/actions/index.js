export const getCategories = (categories) => ({
  type: 'GET_CATEGORIES',
  categories,
});

export const setView = (view) => ({
  type: 'SET_VIEW',
  view,
})