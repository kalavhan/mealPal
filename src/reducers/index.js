import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import viewsReducer from './views';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  view: viewsReducer,
});

export default rootReducer;