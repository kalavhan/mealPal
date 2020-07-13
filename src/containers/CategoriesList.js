import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getCategories } from '../actions/index';
import Loader from '../components/loader';
import CategoriesCard from '../components/CategoriesCard';

const CategoriesList = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        //data.categories.splice(-2,2);
        dispatch(getCategories(data.categories));
        localStorage.setItem('categories', JSON.stringify(data.categories));
      });
    } catch (e) {
      throw(e);
    }
  },[dispatch]);
  
  if(categories.length > 0){
    return (
      <div className='categoriesList'>
        {categories.map(
          category => <CategoriesCard 
          key={category.idCategory}  
          category={category} />
          )}
      </div>
    )
  }

  return <Loader />;
}

export default CategoriesList;
