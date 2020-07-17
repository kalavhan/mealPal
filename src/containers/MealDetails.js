import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setMealDetails } from '../actions/index';
import Nav from '../components/Nav';

const MealDetails = params => {
  const { idMeal } = useParams();
  const { mealDetails, setMealDetails } = params;
  const arrLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      .then(response => response.json())
      .then(data => {
        setMealDetails(data.meals[0]);
      });
  }, [idMeal, setMealDetails]);

  const ingredients = () => {
    const ingredientsList = arrLength.map(x => {
      if (mealDetails[`strIngredient${x}`] !== '' && mealDetails[`strIngredient${x}`] !== null) {
        return (
          <li key={mealDetails[`strIngredient${x}`]}>
            { mealDetails[`strMeasure${x}`] }
                &nbsp;
            { mealDetails[`strIngredient${x}`] }
          </li>
        );
      }
      return '';
    });
    return ingredientsList;
  };

  return (
    <>
      <Nav />
      {mealDetails !== 0 ? (
        <div className="mealDetails">
          <h2 className="mdTitle">{mealDetails.strMeal}</h2>
          <img className="mdImage" src={mealDetails.strMealThumb} alt="Meal to prepare" />
          <h3 className="mdTitleIngredients">Ingredients</h3>
          <ul className="mdIngredients">
            {ingredients()}
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
        </div>
      ) : ''}
    </>
  );
};

const mapStateToProps = state => ({
  mealDetails: state.mealDetails,
});

const mapDispatchToProps = dispatch => ({
  setMealDetails: categories => {
    dispatch(setMealDetails(categories));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
