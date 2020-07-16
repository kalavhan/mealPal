export const getCategories = categories => ({
  type: 'GET_CATEGORIES',
  categories,
});

export const setCategoryMeals = meals => ({
  type: 'SET_CATEGORY_MEALS',
  meals,
});

export const setMealDetails = mealDetails => ({
  type: 'SET_MEAL_DETAILS',
  mealDetails,
});
