import React from 'react';
import { useHistory } from 'react-router';

const MealsCard = ({meal}) => {
  const history = useHistory();
  const changeView = id => (
    history.push(`/meal-details/${id}`)
    )
  return (
    <div onClick={() => changeView(meal.idMeal)}>
      <img src={meal.strMealThumb} alt="mealImage" />
      <h2>{meal.strMeal}</h2>
      <h1>➜</h1>
    </div>
  )
}

export default MealsCard;