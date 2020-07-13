import React  from 'react';
import Loader from '../components/loader';

const MealDetails = ({mealDetails}) => {
  if ( mealDetails.length < 1) {
    return <Loader />
  }
  const arrLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const ingredients = arrLength.map(x => {
    if (mealDetails[`strIngredient${x}`] !== '' && mealDetails[`strIngredient${x}`] !== null) {
      return <li>{mealDetails[`strMeasure${x}`]} {mealDetails[`strIngredient${x}`]}</li>
    }
    return '';
  });

  return (
    <>
      <h2 className="mdTitle">{mealDetails.strMeal}</h2>
      <img className="mdImage" src={mealDetails.strMealThumb} alt="Meal to prepare"/>
      <h3 className="mdTitleIngredients" >Ingredients</h3>
      <ul className="mdIngredients" >
        {ingredients}
      </ul>
      <iframe
        title="meal video"
        src={`https://www.youtube.com/embed/${mealDetails.strYoutube.split('=')[1]}`} 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <h3 className="mdTitleInstructions" >Instructions</h3>
      <p className="mdinstructions">{mealDetails.strInstructions}</p>
    </>
  )
};

export default MealDetails;