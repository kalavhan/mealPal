import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropType from 'prop-types';
import CategoriesList from '../containers/CategoriesList';
import CategoryMeals from '../containers/CategoryMeals';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/">
        <CategoriesList />
      </Route>
      <Route expect path="/category-meals/:categoryName">
        <CategoryMeals />
      </Route>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropType.objectOf(PropType.func).isRequired,
};

export default App;
