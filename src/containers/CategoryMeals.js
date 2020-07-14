import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactDOM from 'react-dom';
import PropType from 'prop-types';
import { setCategoryMeals } from '../actions/index';
import MealsCard from '../components/MealsCard';
import cookingSvg from '../images/cooking.svg';
import Nav from '../components/Nav';
import MealDetails from '../components/mealDetails';

const CategoryMeals = props => {
  const { categoryName } = useParams();
  const { categories, meals, setCategoryMeals } = props;
  const selectedCategory = categories.find(category => category.strCategory === categoryName);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory.strCategory}`)
      .then(response => response.json())
      .then(data => {
        setCategoryMeals(data.meals);
      });
  }, [selectedCategory.strCategory, setCategoryMeals]);

  const selectedMeal = idMeal => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => response.json())
      .then(data => {
        ReactDOM.render(
          <>
            <MealDetails mealDetails={data.meals[0]} />
          </>, document.querySelector('#mealDetails'),
        );
      });
  };

  return (
    <>
      <Nav />
      <div className="categoryMeals">
        <div id="mealDetails" className="mealDetails">
          <h2>Let&apos;s cook something delicious!</h2>
          <h4>Select a meal to get the recepie and start cooking</h4>
          <img src={cookingSvg} alt="let's cook a meal" />
        </div>
        <div className="mealsList">
          {meals.map(ml => <MealsCard key={ml.idMeal} meal={ml} selectedMeal={selectedMeal} />)}
        </div>
      </div>
    </>
  );
};

CategoryMeals.propTypes = {
  categories: PropType.objectOf(PropType.array).isRequired,
  meals: PropType.objectOf(PropType.object).isRequired,
  setCategoryMeals: PropType.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  setCategoryMeals: meals => {
    dispatch(setCategoryMeals(meals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryMeals);
