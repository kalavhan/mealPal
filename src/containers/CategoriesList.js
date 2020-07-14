import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../actions/index';
import Loader from '../components/loader';
import CategoriesCard from '../components/CategoriesCard';
import Nav from '../components/Nav';

const CategoriesList = () => {
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        dispatch(getCategories(data.categories));
      });
  }, [dispatch]);

  if (categories.length > 0) {
    return (
      <>
        <Nav />
        <div className="categoriesList">
          {categories.map(
            category => (
              <CategoriesCard
                key={category.idCategory}
                category={category}
              />
            ),
          )}
        </div>
      </>
    );
  }

  return <Loader />;
};

export default CategoriesList;
