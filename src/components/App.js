import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import CategoriesBox from '../containers/CategoriesList';
import CategoryDetails from '../containers/CategoryDetails';
import { getCategories, setView } from '../actions/index';
import Loader from '../components/loader';

const App = () =>{
  const categories = useSelector(state => state.categories);
  const view = useSelector(state => state.view);
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        dispatch(getCategories(data.categories))
      });
    } catch (e) {
      console.log(e);
    }
  },[dispatch]);

  if (view === 'Categories'){
    console.log(categories.length);
    if (categories.length > 0) {
      return (
        <>
          <CategoriesBox categories={categories}/>
          <button type="button" onClick={() => dispatch(setView('CategoryDetails'))}>
              Toggle
          </button>
        </>
      );
    }
    return <Loader />
  }
  if (view === 'CategoryDetails') {
    return (
      <>
          <CategoryDetails /> 
          <button type="button" onClick={() => dispatch(setView('Categories'))}>
              Toggle
          </button>
      </>
    );
  } 
};

export default App;