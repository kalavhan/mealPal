const mealDetailsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MEAL_DETAILS':
      return action.mealDetails;
    default:
      return state;
  }
};

export default mealDetailsReducer;
