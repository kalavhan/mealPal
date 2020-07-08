import { combineReducers } from 'redux';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;