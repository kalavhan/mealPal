import React from 'react';
import PropType from 'prop-types';

const MealDetails = ({ mealDetails }) => {
  const arrLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const ingredients = arrLength.map(x => {
    if (mealDetails[`strIngredient${x}`] !== '' && mealDetails[`strIngredient${x}`] !== null) {
      return (
        <li>
          { mealDetails[`strMeasure${x}`] }
          &nbsp;
          { mealDetails[`strIngredient${x}`] }
        </li>
      );
    }
    return '';
  });

  return (
    <>
      <h2 className="mdTitle">{mealDetails.strMeal}</h2>
      <img className="mdImage" src={mealDetails.strMealThumb} alt="Meal to prepare" />
      <h3 className="mdTitleIngredients">Ingredients</h3>
      <ul className="mdIngredients">
        {ingredients}
      </ul>
      <iframe
        title="meal video"
        src={`https://www.youtube.com/embed/${mealDetails.strYoutube.split('=')[1]}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h3 className="mdTitleInstructions">Instructions</h3>
      <p className="mdinstructions">{mealDetails.strInstructions}</p>
    </>
  );
};

MealDetails.propTypes = {
  mealDetails: PropType.objectOf(PropType.object).isRequired,
};

export default MealDetails;
