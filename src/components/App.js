import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoriesList from '../containers/CategoriesList';
import CategoryMeals from '../containers/CategoryMeals';

const App = ({store}) =>{
  return (
    <Provider store={store} >
      <Router>
        <Route exact path='/'>
          <CategoriesList />
        </Route>
        <Route expect path='/category-meals/:categoryName'>
          <CategoryMeals />
        </Route>
      </Router>
    </Provider> 
  )
};

export default App;