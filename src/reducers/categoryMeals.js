const categoryMealsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CATEGORY_MEALS':
      return action.meals;
    default:
      return state;
  }
};

export default categoryMealsReducer;
