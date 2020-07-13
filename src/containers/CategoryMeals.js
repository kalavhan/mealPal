import React, {useEffect}  from 'react';
import { setCategoryMeals } from '../actions/index';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Loader from '../components/loader';
import MealsCard from '../components/MealsCard';
import cookingSvg from '../images/cooking.svg';
import Nav from '../components/Nav';
import MealDetails from '../components/mealDetails';


const CategoryMeals = (props) => {
  const {categoryName} = useParams();
  const categories = props.categories;
  const meals = props.meals;
  const setCategoryMeals = props.setCategoryMeals;
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
  },[selectedCategory.strCategory, setCategoryMeals]);
  
  const selectedMeal = idMeal => {
    try {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => response.json())
      .then(data => {
        ReactDOM.render(
          <React.Fragment>
            <MealDetails mealDetails={data.meals[0]}/>
          </React.Fragment>, document.querySelector('#mealDetails')
        );
      });
    } catch (e) {
      throw(e);
    }
  }

  return (
    <>
      <Nav />
      <div className="categoryMeals">
        <div id="mealDetails" className="mealDetails">
          <h2>Let's cook something delicious!</h2>
          <h4>Select a meal to get the recepie and start cooking</h4>
          <img src={cookingSvg} alt="let's cook a meal"/>
        </div>
        <div className="mealsList">
          {meals.map(meal => <MealsCard meal={meal} selectedMeal={selectedMeal}/>)}
        </div>
      </div>
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