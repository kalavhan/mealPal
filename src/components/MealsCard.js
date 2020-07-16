import React from 'react';
import PropType from 'prop-types';

const MealsCard = ({ meals, showMealDetails }) => (
  <div className="mealsList">
    <h1>List of meals</h1>
    {meals.map(meal => (
      <div className="mealCard layer-1" data-testid={meal.idMeal} role="button" key={meal.idMeal} onClick={() => showMealDetails(meal.idMeal)} onKeyUp={() => {}} tabIndex={0}>
        <img src={meal.strMealThumb} alt="mealImage" />
        <h3>{meal.strMeal}</h3>
      </div>
    ))}
  </div>
);

MealsCard.propTypes = {
  meals: PropType.arrayOf(PropType.object).isRequired,
  showMealDetails: PropType.func.isRequired,
};

export default MealsCard;
