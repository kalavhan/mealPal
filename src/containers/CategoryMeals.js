import React, {useEffect}  from 'react';
import { setCategoryMeals } from '../actions/index';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import Loader from '../components/loader';

const CategoryMeals = (props) => {
  const {categoryId} = useParams();
  const { categories, meals, setCategoryMeals } = props;
  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setCategoryMeals(data.meals);
      });
    } catch (e) {
      throw(e);
    }
  },[setCategoryMeals]);
  
  if ( categories.length < 1) {
    return <Loader />
  }

  return (
    <>
      {categories.map(meal => 
        console.log(meal)
      )}
    </>
  )
};

const mapStateToProps = state => ({
  categories: state.categories,
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  setCategoryMeals: (meals) => {
    dispatch(setCategoryMeals(meals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMeals);