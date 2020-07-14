import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import categoryMealsReducer from './categoryMeals';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: categoryMealsReducer,
});

export default rootReducer;
