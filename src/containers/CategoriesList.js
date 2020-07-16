import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import PropType from 'prop-types';
import { getCategories, setCategoryMeals } from '../actions/index';
import CategoriesCard from '../components/CategoriesCard';
import Nav from '../components/Nav';
import MealsCard from '../components/MealsCard';

const CategoriesList = props => {
  const {
    categories,
    meals,
    getCategories,
    setCategoryMeals,
  } = props;

  const history = useHistory();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        getCategories(data.categories);
      });
  }, [getCategories]);

  const filterMeals = strFilter => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strFilter}`)
      .then(response => response.json())
      .then(data => {
        setCategoryMeals(data.meals);
      });
  };

  const showMealDetails = idMeal => {
    history.push(`/meal/${idMeal}`);
  };

  return (
    <>
      <Nav />
      <CategoriesCard categories={categories} filterMeals={filterMeals} />
      {meals.length > 0 ? <MealsCard meals={meals} showMealDetails={showMealDetails} /> : ''}
    </>
  );
};

CategoriesList.propTypes = {
  categories: PropType.arrayOf(PropType.object).isRequired,
  meals: PropType.arrayOf(PropType.object).isRequired,
  getCategories: PropType.func.isRequired,
  setCategoryMeals: PropType.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  getCategories: categories => {
    dispatch(getCategories(categories));
  },
  setCategoryMeals: meals => {
    dispatch(setCategoryMeals(meals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
