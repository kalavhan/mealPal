import React from 'react';
import { useHistory } from 'react-router';

const MealsCard = ({meal}) => {
  const history = useHistory();
  const changeView = id => (
    history.push(`/meal-details/${id}`)
    )
  return (
    <div className="mealCard" onClick={() => changeView(meal.idMeal)}>
      <img src={meal.strMealThumb} alt="mealImage" />
      <h3>{meal.strMeal}</h3>
    </div>
  )
}

export default MealsCard;