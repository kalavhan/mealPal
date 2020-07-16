import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import categoryMealsReducer from './categoryMeals';
import mealDetailsReducer from './mealDetails';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: categoryMealsReducer,
  mealDetails: mealDetailsReducer,
});

export default rootReducer;
