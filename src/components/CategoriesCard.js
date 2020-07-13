import React from 'react';
import { useHistory } from 'react-router';

const CategoriesCard = ({ category, clickFunction }) => {
  const history = useHistory();
  const changeView = categoryName => (
    history.push(`/category-meals/${categoryName}`)
  );

  return (
    <div className="categoriesCard" onClick={() => changeView(category.strCategory)}>
      <h1>{category.strCategory}</h1>
      <div className="categoriesCardImg">
        <img src={category.strCategoryThumb} alt={`How to make ${category.strCategory} based meals`}/>
      </div>
    </div>
  )
};

export default CategoriesCard;