export const getCategories = (categories) => ({
  type: 'GET_CATEGORIES',
  categories,
});

export const setCategoryMeals = (meals) => {
  console.log(meals);
  return ({
  type: 'SET_CATEGORY_MEALS',
  meals,
})}