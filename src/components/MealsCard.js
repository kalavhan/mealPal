import React from 'react';

const MealsCard = ({meal, selectedMeal}) => {
  return (
    <div className="mealCard layer-1" onClick={() => selectedMeal(`${meal.idMeal}`)}>
      <img src={meal.strMealThumb} alt="mealImage" />
      <h3>{meal.strMeal}</h3>
    </div>
  )
}

export default MealsCard;