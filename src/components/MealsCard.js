import React from 'react';
import PropType from 'prop-types';

const MealsCard = ({ meal, selectedMeal }) => (
  <div className="mealCard layer-1" role="button" onClick={() => selectedMeal(`${meal.idMeal}`)} onKeyUp={() => {}} tabIndex={0}>
    <img src={meal.strMealThumb} alt="mealImage" />
    <h3>{meal.strMeal}</h3>
  </div>
);

MealsCard.propTypes = {
  meal: PropType.objectOf(PropType.object).isRequired,
  selectedMeal: PropType.func.isRequired,
};

export default MealsCard;
