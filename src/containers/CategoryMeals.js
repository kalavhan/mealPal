import React, {useEffect}  from 'react';
import { setCategoryMeals } from '../actions/index';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import Loader from '../components/loader';
import MealsCard from '../components/MealsCard';

const CategoryMeals = (props) => {
  const {categoryName} = useParams();
  let categories = props.categories;
  const meals = props.meals;
  const setCategoryMeals = props.setCategoryMeals;
  categories = categories.length > 0 ? categories : JSON.parse(localStorage.getItem('categories'));
  const selectedCategory = categories.find(category => category.strCategory === categoryName);

  useEffect(() => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory.strCategory}`)
      .then(response => response.json())
      .then(data => {
        setCategoryMeals(data.meals);
      });
    } catch (e) {
      throw(e);
    }
  },[selectedCategory.idCategory, setCategoryMeals]);
  
  if ( categories.length < 1) {
    return <Loader />
  }

  return (
    <div className="categoryMeals">
      <div>
        <h1>{selectedCategory.strCategory}</h1>
        <img src={selectedCategory.strCategoryThumb} alt="imageOfTheMeal" />
        <p>{selectedCategory.strCategoryDescription}</p>
      </div>
      <div class="mealsList">
        {meals.map(meal => <MealsCard meal={meal}/>)}
      </div>
    </div>
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